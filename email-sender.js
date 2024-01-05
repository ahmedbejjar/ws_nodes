const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 't9382197@gmail.com',
        pass: 'PPP123456789'
      }
    });

    // Define the email options
    const mailOptions = {
      from: 't9382197@gmail.com',
      to: 'jallouliabdallah16@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}

// Call the function to send the email
sendEmail();