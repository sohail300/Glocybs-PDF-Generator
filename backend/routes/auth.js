import express from "express";
import dotenv from "dotenv";
import login from "../controllers/login.js";
import signup from "../controllers/signup.js";
import sendOTP from "../controllers/sendOTP.js";
import changepassword from "../controllers/changepassword.js";

const saltRounds = 10;
const router = express.Router();

dotenv.config();

router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotp", sendOTP);
router.post("/changepassword", changepassword);

export default router;
