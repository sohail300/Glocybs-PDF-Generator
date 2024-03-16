import { Admin } from "../db/model.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../middleware/auth.js";
import { z } from "zod";
import bcrypt from 'bcrypt'

const saltRounds = 10;

export const signupInput = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(30)
        .email("Please enter a valid email."),
    password: z.string().min(6, { message: "Minimum 6 characters." }).max(20),
});

async function signup(req, res) {
    try {
        const parsedInput = signupInput.safeParse(req.body);

        if (parsedInput.success === false) {
            return res.status(411).json({
                msg: parsedInput.error,
            });
        }

        const email = parsedInput.data.email;
        const password = parsedInput.data.password;

        const user = await Admin.findOne({ email });

        if (user) {
            return res.status(403).send("User already Exists");
        } else {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const obj = {
                email: email,
                password: hashedPassword,
            };
            const newAdmin = new Admin(obj);
            await newAdmin.save();
            console.log("Admin saved");

            const token = jwt.sign({ id: newAdmin._id, role: "admin" }, secretKey, {
                expiresIn: "1h",
            });

            return res.status(201).json(token);
        }
    } catch (err) {
        return res.status(500).send({ "Internal Error": err });
    }
}

export default signup