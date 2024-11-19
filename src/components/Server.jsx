const express = require("express");
const nodemailer = require("nodemailer");
const XLSX = require("xlsx");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: "Gmail", // or your preferred email service
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Prepare spreadsheet data
  const spreadsheetData = [
    ["Name", "Email", "Message"],
    [name, email, message],
  ];

  // Create a new workbook and a new worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(spreadsheetData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "ContactFormSubmissions");

  // Generate a buffer for the spreadsheet
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  // Define email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@gmail.com",
    subject: "New Contact Form Submission",
    text: `You have received a new message from ${name}.`,
    attachments: [
      {
        filename: "ContactFormSubmissions.xlsx",
        content: buffer,
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
