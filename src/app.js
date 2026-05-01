import express from "express";
import usersRoutes from "./routes/user.routes.js";

const app = express();
app.use("/users", usersRoutes);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API funcionando"
  });
});

export default app;