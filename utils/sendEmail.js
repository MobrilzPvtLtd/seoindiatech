import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Send email notification for Contact Form submission
 * @param {Object} data - Form data
 * @returns {Promise<Object>} Result of email send
 */
export const sendContactFormEmail = async (data) => {
  try {
    const transporter = createTransporter();

    // Email to admin/team
    const adminMailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: `New Contact Form Submission - ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Inquiry Type:</strong> ${data.inquiryType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 10px; border-left: 4px solid #2563eb;">${data.message.replace(/\n/g, '<br>')}</p>
            ${data.wantsAppointment ? `
              <p><strong>Appointment Requested:</strong> Yes</p>
              <p><strong>Preferred Date:</strong> ${data.appointmentDate}</p>
              <p><strong>Preferred Time:</strong> ${data.appointmentTime}</p>
              <p><strong>Meeting Type:</strong> ${data.meetingType}</p>
            ` : '<p><strong>Appointment Requested:</strong> No</p>'}
          </div>
          <p style="color: #666; font-size: 12px;">
            <em>This is an automated email. Please respond directly to the customer's email address.</em>
          </p>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: data.email,
      subject: `We received your message - SEO India Tech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting SEO India Tech</h2>
          <p>Hi ${data.fullName},</p>
          <p>We have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Inquiry Details:</strong></p>
            <p><strong>Type:</strong> ${data.inquiryType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 10px; border-left: 4px solid #2563eb;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>In the meantime, you can:</p>
          <ul>
            <li>Visit our website: <a href="https://www.seoindiatech.com">seoindiatech.com</a></li>
            <li>Check out our services and portfolio</li>
          </ul>
          <p>Best regards,<br><strong>SEO India Tech Team</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            © 2026 SEO India Tech. All rights reserved.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw error;
  }
};
