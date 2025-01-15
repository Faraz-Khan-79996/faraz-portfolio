import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;
const password = process.env.GMAIL_APP_PASSWORD;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Create transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail service
    port: 465, // Use 465 for secure connections
    secure: true, // Use true for 465
    auth: {
      user: fromEmail, // Gmail address
      pass: password, // App password
    },
  });

  try {
    // Set up email data
    const mailOptions = {
      from: fromEmail, // Sender's email address
      to: [email, fromEmail], // Recipient email addresses
      subject: subject, // Subject line
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
