import Message from "../models/mensaje.js";

export const getMessages = async (req, res) => {
  const messages = await Message.find();

  res.json({
    success: true,
    data: messages
  });
};

export const createMessage = async (req, res) => {
  const message = await Message.create(req.body);

  res.json({
    success: true,
    data: message
  });
};