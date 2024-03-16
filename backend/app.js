import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import { connectDB } from "./db/conn.js";

import { authenticate } from "./middleware/auth.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connectDB();
app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.send("Root Page");
});

app.get("/me", authenticate, (req, res) => {
    const id = req.headers.id;
    const role = req.headers.role;
    res.json({ id, role });
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
