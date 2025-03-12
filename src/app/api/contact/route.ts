import { NextResponse } from "next/server";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { First_Name, Last_Name, Email, Phone_Number, Message } = body;
    // Validate the required fields
    if (!First_Name || !Email || !Phone_Number) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.APP_PASSWORD, // Your Gmail app password
      },
    });
    // Email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Your email to receive the message
      subject: `New Contact Form Submission ${new Date().toDateString()}`,
      text: `First_Name: ${First_Name}\nLast_Name: ${Last_Name}\nEmail: ${Email}\Phone_Number: ${Phone_Number}\nMessage: ${Message}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
        }
        h3 {
            color: #333;
        }
        p {
            font-size: 16px;
        }
        strong {
            color: #555;
        }
    </style>
</head>
<body>
    <h3>Contact Form Submission ${new Date().toLocaleString()}</h3>
    <p><strong>First Name:</strong> ${First_Name}</p>
    <p><strong>Last Name:</strong> ${Last_Name}</p>
    <p><strong>Email:</strong> ${Email}</p>
    <p><strong>Phone Number:</strong> ${Phone_Number}</p>
    <p><strong>Message:</strong> ${Message}</p>
</body>
</html> 
      `,
    };
    // Send email via Nodemailer
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
