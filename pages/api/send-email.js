// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { name, email, subject, body } = req.body;

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service provider here
      // For example, using Gmail SMTP:
      service: 'gmail',
      auth: {
        user: 'gabriel47lunesu@gmail.com',
        pass: 'fjtz jsgn kzrz dpws',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'gabriel47lunesu@gmail.com',
      to: 'g.lunesu@outlook.com',
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
