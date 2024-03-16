import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.DB_URL;
// MongoDB Connection
export async function connectDB() {
  try {
    await mongoose.connect(dbURL);
    console.log("Database connected");
  } catch (err) {
    console.log("Error connecting to DB: " + err);
  }
}
