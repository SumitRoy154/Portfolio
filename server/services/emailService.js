import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using Resend
 * @param {Object} data - Contact form data
 * @returns {Promise<Object>} - Resend API response
 */
export async function sendContactEmail(data) {
  const { name, email, message } = data;

  try {
    const { data: resData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.YOUR_EMAIL || 'sumit.roy.152004@gmail.com',
      subject: 'New Portfolio Contact',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Contact</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API returned error:', error);
      throw new Error(error.message || 'Failed to send email via Resend');
    }

    return resData;
  } catch (error) {
    console.error('sendContactEmail error:', error.message);
    throw error;
  }
}
