import express from "express";
import usersRoutes from "./routes/user.routes.js";
import chatsRoutes from "./routes/chats.routes.js";

const app = express();
app.use("/users", usersRoutes);
app.use(express.json());
app.use("/chats", chatsRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API funcionando"
  });
});

export default app;