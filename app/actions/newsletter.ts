'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeNewsletter(email: string) {
  // Validate email format before sending
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  try {
    // Send welcome email to subscriber
    const welcomeEmailResult = await resend.emails.send({
      from: 'contact@thealternativeeye.com',
      to: email,
      subject: 'Welcome to The Alternative Eye',
      text: `Welcome,

Thank you for subscribing to The Alternative Eye We're excited to have you as part of our community.

Best regards,

The The Alternative Eye Team`,
    });

    // Send notification email to contact@thealternativeeye.com
    const notificationEmailResult = await resend.emails.send({
      from: 'contact@thealternativeeye.com',
      to: 'contact@thealternativeeye.com',
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter:

Email: ${email}

Timestamp: ${new Date().toISOString()}`,
    });

    // Check if either email failed to send
    if (welcomeEmailResult.error || notificationEmailResult.error) {
      const errorMessage = welcomeEmailResult.error?.message || notificationEmailResult.error?.message || 'Failed to send email';
      return { 
        success: false, 
        error: 'Failed to send email. Please try again later.' 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.' 
    };
  }
}

