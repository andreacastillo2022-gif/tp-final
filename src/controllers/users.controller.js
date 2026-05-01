import User from "../models/users.js";

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    data: users,
    message: "Usuarios obtenidos."
  });
};

export const createUser = async (req, res) => {

  console.log(req.body);

  const user = await User.create(req.body);

  res.json({
    success: true,
    data: user,
    message: "Usuario creado."
  });

 
};

export const deleteUser = async (req, res) => {

  const user = await User.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    data: user,
    message: "Usuario eliminado"
  });
};