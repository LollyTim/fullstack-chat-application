import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import authUser from "../middleware/auth.js";

const router = express.Router();
router.post("/send/:id", authUser, sendMessage);

export default router;
