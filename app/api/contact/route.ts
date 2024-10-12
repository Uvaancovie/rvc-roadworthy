import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the email provider you're using
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: email, // The user's email
    to: process.env.COMPANY_EMAIL, // The company owner's email
    subject: `New message from ${name}`,
    text: `You received a new message from ${name} (${email}): \n\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
