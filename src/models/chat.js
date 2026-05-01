import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  title: String
});

export default mongoose.model("Chat", chatSchema);