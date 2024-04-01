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
    html: `<body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
    <table role="presentation"
      style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
      <tbody>
        <tr>
          <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
            <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
              <tbody>
                <tr>
                  <td style="padding: 40px 0px 0px;">

                    <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                      <div style="color: rgb(0, 0, 0); text-align: left;">
                        <h1 style="margin: 1rem 0">Verification code</h1>
                        <p style="padding-bottom: 16px">Please use the verification code below to change your password.</p>
                        <p style="padding-bottom: 16px"><strong style="font-size: 130%">${otp}</strong></p>
                        <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p>
                        <p style="padding-bottom: 16px">Thanks,<br>Glocybs Team</p>
                      </div>
                    </div>
                    <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                      <p style="padding-bottom: 16px">Made with ♥ by Glocybs</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  `,
  }

  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent:", info.messageId);

  admin.otp=otp;
  await admin.save();

  return res.status(200).json({ msg: 'Sent!' });
}

async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  const admin =Admin.findOne({email});

  const savedOTP = admin.otp;

  if (savedOTP && savedOTP === otp) {
    admin.otp=null;
    await admin.save();
    return res.status(200).json({ msg: 'OTP verified successfully', flag: true });
  } else {
    // OTP didn't match
    return res.status(400).json({ msg: 'Invalid OTP' });
  }
}

export { sendOTP, verifyOTP }