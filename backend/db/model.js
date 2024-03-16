import mongoose from "mongoose";

// MongoDB Schema
const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// MongoDB Models
export const Admin = mongoose.model("Admin", adminSchema);