import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
}, );

export const userModel = mongoose.models.User || mongoose.model("User", userSchema);
