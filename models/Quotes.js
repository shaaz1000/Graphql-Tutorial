import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    sparse: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true,
    sparse: true,
  },
});

mongoose.model("Quotes", quoteSchema);
