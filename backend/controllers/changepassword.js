import { Admin } from "../db/model.js";
import { z } from "zod";
import bcrypt from 'bcrypt'
import dotenv from "dotenv";

dotenv.config();

const salt = parseInt(process.env.SALT_ROUNDS);

// Custom validator function to check password complexity
function passwordComplexityValidator(value) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    return (uppercaseRegex.test(value) || lowercaseRegex.test(value)) && numberRegex.test(value);
}

const passwordInput = z.object({
    password: z.string().min(6, { message: "characters must be between 6 and 20 characters." }).max(20, { message: "characters must be between 6 and 20 characters." }).refine(value => passwordComplexityValidator(value), {
        message: 'Password must contain at least one uppercase letter or one lowercase letter and one special character',
    }),
});

async function changePassword(req, res) {
    const parsedInput = passwordInput.safeParse(req.body);

    if (parsedInput.success === false) {
        return res.status(411).json({
            msg: parsedInput.error,
        });
    }

    const email = req.body.email;
    const password = parsedInput.data.password;
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
        return res.status(403).json({ msg: 'User doesnt exist' });
    } else {
        const hashedPassword = await bcrypt.hash(password, salt);
        admin.password = hashedPassword;
        await admin.save();
        return res.status(201).json({ msg: 'Password Changed!' });
    }
}

export default changePassword