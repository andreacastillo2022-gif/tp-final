import Chat from "../models/chat.js";

export const getChats = async (req, res) => {
  const chats = await Chat.find();

  res.json({
    success: true,
    data: chats,
    message: "Chats obtenidos.",
  });
};

export const createChat = async (req, res) => {
  const chat = await Chat.create(req.body);

  res.json({
    success: true,
    data: chat,
    message: "Chat creado.",
  });
};

export const deleteChat = async (req, res) => {

  const chat = await Chat.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    data: chat,
    message: "Chat eliminado"
  });
};