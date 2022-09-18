import mongoose from "mongoose";

const userMdoel = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  password: { type: String },
});

export default mongoose.model("user", userMdoel);
