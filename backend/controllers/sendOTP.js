import { Admin } from "../db/model.js";
import nodemailer from "nodemailer";
import { generateOtp } from "../utils/generateOTP.js";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

async function sendOTP(req, res) {
  const email = req.body.email;
  const admin = Admin.findOne({ email: email });

  if (!admin) {
    return res.status(403).send("User doesnt exist");
  } else {
    const otp = generateOtp();
    const info = await transporter.sendMail({
      from: `"E-Kaksha" <ekaksha2001@gmail.com>`,
      to: `${email}`,
      subject: "OTP Verification",
      html: `Your <b>Forgot Password</b> verification code is: <b>${otp}</b>`,
    });
    console.log("Message sent:", info.messageId);
    res.status(200).json({ email: email, otp: otp });
  }
}

export default sendOTP