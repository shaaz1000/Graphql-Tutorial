import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
    sparse: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
    sparse: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.model("User", userSchema);
