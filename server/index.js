import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { contactSchema } from './validation/contactSchema.js';
import { validateMXRecord } from './utils/mxValidation.js';
import { sendContactEmail } from './services/emailService.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting store (simple in-memory)
const rateLimitStore = new Map();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting middleware
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const requests = rateLimitStore.get(ip) || [];
  const validRequests = requests.filter((timestamp) => now - timestamp < windowMs);

  if (validRequests.length >= maxRequests) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  next();
};

// Contact API endpoint
app.post('/api/contact', rateLimit, async (req, res) => {
  try {
    // Check honeypot field
    if (req.body.honeypot) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Server-side validation using Zod
    const validationResult = contactSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationResult.error.errors 
      });
    }

    const { name, email, message } = validationResult.data;

    // MX Record validation
    const hasMXRecord = await validateMXRecord(email);

    if (!hasMXRecord) {
      return res.status(400).json({ 
        error: 'This email domain cannot receive emails.' 
      });
    }

    // Send email
    await sendContactEmail({ name, email, message });

    res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been sent.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
