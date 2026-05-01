import Chat from "../models/chat.js";

export const getChats = async (req, res) => {
  const chats = await Chat.find();

  res.json({
    success: true,
    data: chats
  });
};

export const createChat = async (req, res) => {
  const chat = await Chat.create(req.body);

  res.json({
    success: true,
    data: chat
  });
};