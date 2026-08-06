import { contactSchema } from '../server/validation/contactSchema.js';
import { validateMXRecord } from '../server/utils/mxValidation.js';
import { sendContactEmail } from '../server/services/emailService.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        details: validationResult.error.errors,
      });
    }

    const { name, email, message } = validationResult.data;

    // MX Record validation
    const hasMXRecord = await validateMXRecord(email);

    if (!hasMXRecord) {
      return res.status(400).json({
        error: 'This email domain cannot receive emails.',
      });
    }

    // Send email
    await sendContactEmail({ name, email, message });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent.',
    });
  } catch (error) {
    console.error('Contact form serverless error:', error);
    return res.status(500).json({
      error: 'Something went wrong. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
