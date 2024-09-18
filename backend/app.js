import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import { connectDB } from "./db/conn.js";
import multer from "multer";

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
    return res.json({ id, role });
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './files');
    },

    filename: function (req, file, cb) {
        return cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage });

app.post('/api/file', upload.array('file'), (req, res) => {
    console.log(req.files)
    console.log(req.body)
    return res.json({
        msg: "Sent!"
    })
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
