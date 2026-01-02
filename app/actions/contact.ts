'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  // Validate email format before sending
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  // Validate required fields
  if (!name.trim() || !message.trim()) {
    return { success: false, error: 'Name and message are required' };
  }

  try {
    // Send confirmation email to user
    const confirmationEmailResult = await resend.emails.send({
      from: 'contact@thealternativeeye.com',
      to: email,
      subject: `Thanks for Contacting us ${name}`,
      text: `Thank you for reaching out to Alternative Eye: Beyond the File. We've received your message and appreciate you taking the time to connect with us.

Our team reviews every inquiry carefully. If your message requires a response, someone from our team will be in touch as soon as possible. We're committed to accuracy, integrity, and respectful engagement as we continue our work.

Thank you for being part of a community that values truth, accountability, and thoughtful investigation.

Best regards,

The Alternative Eye Team`,
    });

    // Send notification email to contact@thealternativeeye.com
    const notificationEmailResult = await resend.emails.send({
      from: 'contact@thealternativeeye.com',
      to: 'contact@thealternativeeye.com',
      subject: 'New Contact Form Submission',
      text: `A new contact form submission has been received:

Name: ${name}
Email: ${email}
Subject: ${subject || '(No subject provided)'}
Message: ${message}

Timestamp: ${new Date().toISOString()}`,
    });

    // Check if either email failed to send
    if (confirmationEmailResult.error || notificationEmailResult.error) {
      return {
        success: false,
        error: 'Failed to send email. Please try again later.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}

