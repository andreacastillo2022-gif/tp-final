import express from "express";

import usersRoutes from "./routes/user.routes.js";
import chatsRoutes from "./routes/chat.routes.js";
import messagesRoutes from "./routes/mensajes.routes.js";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/chats", chatsRoutes);
app.use("/messages", messagesRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API funcionando"
  });
});

export default app;