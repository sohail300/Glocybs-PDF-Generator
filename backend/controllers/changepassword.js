import { Admin } from "../db/model.js";
import { z } from "zod";
import bcrypt from 'bcrypt'

const saltRounds = 10;

const passwordInput = z.object({
    password: z.string().min(6, { message: "Minimum 6 characters." }).max(20),
});

async function changepassword(req, res) {
    const parsedInput = passwordInput.safeParse(req.body);

    if (parsedInput.success === false) {
        return res.status(411).json({
            msg: parsedInput.error,
        });
    }

    const email = req.body.sentemail;
    const password = parsedInput.data.password;

    const admin = await Admin.findOne({ email: email });

    if (!admin) {
        return res.status(403).send("User doesnt exist");
    } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        admin.password = hashedPassword;
        await admin.save();
        return res.status(200).send("Password Changed!");
    }
}

export default changepassword