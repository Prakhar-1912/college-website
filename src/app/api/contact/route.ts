import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration is missing. Please set EMAIL_USER and EMAIL_PASSWORD in .env.local');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const collegeEmail = process.env.COLLEGE_EMAIL || 'info@krmcollege.edu.in';

    // Email to college
    const collegeMailOptions = {
      from: process.env.EMAIL_USER,
      to: collegeEmail,
      replyTo: email, // Allow college to reply directly to the sender
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #b71c1c; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <h2 style="color: #b71c1c;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>
            <h2 style="color: #b71c1c; margin-top: 20px;">Message</h2>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #b71c1c;">
              ${message}
            </div>
          </div>
          <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Kedarnath Ramswaroop Mahavidyalaya</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">This is an automated message from the college website contact form.</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Kedarnath Ramswaroop Mahavidyalaya',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #b71c1c; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Kedarnath Ramswaroop Mahavidyalaya. We have received your message and will get back to you as soon as possible.</p>
            <h3 style="color: #b71c1c;">Your Message Details:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #b71c1c; margin: 20px 0;">
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <p>If you have any urgent queries, please feel free to call us at +91-7379620547.</p>
            <p>Best regards,<br>Kedarnath Ramswaroop Mahavidyalaya</p>
          </div>
          <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Karwi Pahadi Road, Khatwara, Majra, Chitrakoot, U.P - 210207</p>
            <p style="margin: 5px 0 0 0;">Phone: +91-7379620547 | Email: ${collegeEmail}</p>
          </div>
        </div>
      `,
    };

    // Send email to college
    await transporter.sendMail(collegeMailOptions);
    
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more detailed error information in development
    const isDevelopment = process.env.NODE_ENV === 'development';
    const errorMessage = isDevelopment && error instanceof Error 
      ? `Failed to send email: ${error.message}`
      : 'Failed to send email. Please try again later.';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
