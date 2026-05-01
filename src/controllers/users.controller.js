import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    data: users,
    message: "Usuarios obtenidos."
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.json({
    success: true,
    data: user,
    message: "Usuario creado."
  });
};