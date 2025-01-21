import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;
const password = process.env.GMAIL_APP_PASSWORD;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  // Get the referrer URL from the request headers
  const siteLink = 'https://faraz-portfolio-seven.vercel.app';



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
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .email-header h1 {
                margin: 0;
                font-size: 24px;
              }
              .email-body {
                padding: 20px;
                color: #333;
                font-size: 16px;
                line-height: 1.6;
              }
              .email-footer {
                background-color: #f9f9f9;
                padding: 10px;
                text-align: center;
                font-size: 14px;
                color: #555;
                border-radius: 0 0 8px 8px;
              }
              .footer-links {
                margin-top: 10px;
              }
              .footer-links a {
                text-decoration: none;
                color: #4CAF50;
                margin: 0 10px;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <h1>${subject}</h1>
              </div>
              <div class="email-body">
                <p><strong>Dear User,</strong></p>
                <p>Thank you for reaching out to me! Below is the new message submitted through the contact form:</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              </div>
              <div class="email-footer">
                <p>If you have any further questions, feel free to reach out.</p>
                <div class="footer-links">
                  <a href="mailto:${fromEmail}">Contact Me</a> | 
                  <a href="${siteLink}">Visit my Website</a>
                </div>
              </div>
            </div>
          </body>
        </html>
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
