import express from "express";

import {
  getChats,
  createChat
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/", getChats);

router.post("/", createChat);


router.delete("/:id", deleteChat);

export default router;