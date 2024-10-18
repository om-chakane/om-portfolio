const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // Your backend runs on this port

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse incoming JSON data

// Route for sending email
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change to your email provider
    auth: {
      user: 'omchakane222@gmail.com', // Replace with your email
      pass: 'nqdhnvnbcxdikhsa',  // Replace with your email password (use app password if using Gmail)
    },
  });

  // Define the email options
  const mailOptions = {
    from: email,
    to: 'omchakane222@gmail.com',  // Your email to receive the message
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error); // Log the detailed error on the server
    // Send the actual error message back to the frontend
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
