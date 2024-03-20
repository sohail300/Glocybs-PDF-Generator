import { Admin } from "../db/model.js";
import nodemailer from "nodemailer";
import otpGenerator from 'otp-generator'


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

// Hard-coded OTP for demonstration
const generatedOTP = {};

async function sendOTP(req, res) {
  const email = req.body.email;
  const admin = Admin.findOne({ email });
  
  console.log(admin)
  if (!admin) {
    return res.status(403).send("User doesnt exist");
  }
  
  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
  console.log(otp)
  
  const mailOptions = {
    from: `"E-Kaksha" <ekaksha2001@gmail.com>`,
    to: `${email}`,
    subject: "OTP Verification",
    html: `Your <b>Forgot Password</b> verification code is: <b>${otp}</b>`,
  }

  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent:", info.messageId);
  generatedOTP[email] = otp;

  return res.status(200).json({ msg: 'Sent!' });
}

async function verifyOTP(req, res) {
  const { email, otp } = req.body;
  console.log(req.body)
  const savedOTP = generatedOTP[email];
  console.log(savedOTP)
  if (savedOTP && savedOTP === otp) {
    // OTP matched
    delete generatedOTP[email]; // Clear OTP after successful verification
    res.json({ message: 'OTP verified successfully', flag: true });
  } else {
    // OTP didn't match
    res.status(400).json({ error: 'Invalid OTP' });
  }
}

export { sendOTP, verifyOTP }