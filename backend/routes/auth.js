import express from "express";
import dotenv from "dotenv";
import login from "../controllers/login.js";
import signup from "../controllers/signup.js";
import { sendOTP, verifyOTP } from "../controllers/sendOTP.js";
import changePassword from "../controllers/changepassword.js";

const router = express.Router();

dotenv.config();

router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotp", sendOTP);
router.post("/verifyotp", verifyOTP);
router.post("/changepassword", changePassword);

export default router;
