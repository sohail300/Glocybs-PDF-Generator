import { Admin } from "../db/model.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../middleware/auth.js";
import { z } from "zod";
import bcrypt from 'bcrypt'

export const loginInput = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(30)
        .email("Please enter a valid email."),
    password: z.string().min(6, { message: "Minimum 6 characters." }).max(20),
});

async function login(req, res) {
    try {
        const parsedInput = loginInput.safeParse(req.body);

        if (parsedInput.success === false) {
            return res.status(411).json({
                msg: parsedInput.error,
            });
        }

        const email = parsedInput.data.email;
        const password = parsedInput.data.password;

        const admin = await Admin.findOne({ email: email });

        if (!admin) {
            return res.status(403).send("User doesnt exist");
        } else {
            const match = await bcrypt.compare(password, admin.password);

            if (match) {
                const token = jwt.sign({ id: admin._id, role: "admin" }, secretKey, {
                    expiresIn: "1h",
                });
                return res.status(200).json(token);
            } else {
                return res.status(403).send("Invalid Credentials");
            }
        }
    } catch (err) {
        return res.status(500).send({ "Internal Error": err });
    }
}

export default login;