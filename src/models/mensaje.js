import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  content: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat"
  }
});

export default mongoose.model("Message", messageSchema);