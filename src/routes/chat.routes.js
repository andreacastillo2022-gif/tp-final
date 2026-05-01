import express from "express";

import {
  getChats,
  createChat,
    deleteChat
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/", getChats);

router.post("/", createChat);


router.delete("/:id", deleteChat);

export default router;