import { Admin } from "../db/model.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../middleware/auth.js";
import { z } from "zod";
import bcrypt from 'bcrypt'
import dotenv from "dotenv";

dotenv.config();

export const signupInput = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(30)
        .email("Please enter a valid email."),
    password: z.string().min(6, { message: "Password must be between 6 and 20 characters." }).max(20, { message: "Password must be between 6 and 20 characters." }),
});

async function signup(req, res) {
    try {
        const parsedInput = signupInput.safeParse(req.body);

        if (parsedInput.success === false) {
            return res.status(411).json({
                msg: parsedInput.error.issues[0].message,
            });
        }

        const email = parsedInput.data.email;
        const password = parsedInput.data.password;

        const user = await Admin.findOne({ email });

        if (user) {
            return res.status(403).json({ msg: 'Admin already Exists' });
        } else {
            const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);
            const obj = {
                email: email,
                password: hashedPassword,
                otp: null
            };
            const newAdmin = new Admin(obj);
            await newAdmin.save();

            const token = jwt.sign({ id: newAdmin._id, role: "admin" }, secretKey, {
                expiresIn: "1h",
            });

            return res.status(201).json({ msg: 'Admin created', token });
        }
    } catch (err) {
        return res.status(500).json({ msg: 'Internal Error', err });
    }
}

export default signup