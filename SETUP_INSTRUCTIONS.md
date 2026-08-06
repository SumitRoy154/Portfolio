# Contact Form Setup Instructions

## Environment Variables

To make the contact form work, you need to set up the following environment variables. Since `.env` files are gitignored, you'll need to create this manually in your project root.

### Required Environment Variables

Create a `.env` file in the project root directory with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
YOUR_EMAIL=sumit.roy.152004@gmail.com
```

### Getting Your Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key and add it to your `.env` file

### Optional: Configure Your Own Domain

If you want to use your own domain instead of `onboarding@resend.dev`:

1. Verify your domain in Resend
2. Update `RESEND_FROM_EMAIL` with your verified email address

## Running the Project

### Start the Frontend (Vite Dev Server)
```bash
npm run dev
```
The frontend will run on `http://localhost:5174` (or another available port)

### Start the Backend (Express Server)
```bash
npm run server
```
The backend will run on `http://localhost:3001`

### Development Workflow

For development, you need to run both servers simultaneously:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
npm run server
```

## Features Implemented

### Client-Side Validation
- React Hook Form with Zod validation
- Name: 2-100 characters, required
- Email: Valid email format, required
- Message: 10-2000 characters, required
- Real-time validation error display

### Server-Side Validation
- Same Zod schema validation on the backend
- MX record validation for email domains
- Rejects domains without MX records

### Security Features
- Honeypot field for spam protection
- Rate limiting (5 requests per 15 minutes per IP)
- Input sanitization and trimming
- CORS enabled for cross-origin requests

### Email Delivery
- Uses Resend for email delivery
- Includes visitor's name, email, and message
- Sets Reply-To header for easy responses
- Professional HTML email template

### User Experience
- Loading spinner during submission
- Success message after successful submission
- Error messages for validation failures
- Form auto-clears on success
- Disabled submit button during submission

## Testing the Form

### Valid Email Addresses (Should Work)
- john@gmail.com
- user@outlook.com
- someone@amazon.com
- student@student.mes.ac.in
- professor@mit.edu
- employee@company.co.in

### Invalid Email Addresses (Should Fail)
- abc@
- @gmail.com
- gmail.com
- abc@xyz12345.com (no MX records)
- Empty name
- Empty message
- Message shorter than 10 characters

## Troubleshooting

### "This email domain cannot receive emails."
This means the MX record validation failed. Either:
- The email domain doesn't exist
- The domain doesn't have MX records configured
- DNS lookup failed

### "Something went wrong. Please try again later."
This is a general error. Check:
- Backend server is running on port 3001
- Resend API key is correct
- Network connectivity
- Server console for detailed error logs

### Form not submitting
Check:
- Both frontend and backend servers are running
- No CORS errors in browser console
- Network tab in browser dev tools for request status
