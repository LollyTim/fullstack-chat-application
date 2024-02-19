import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import authUser from "../middleware/auth.js";

const router = express.Router();
router.get("/:id", authUser, getMessage);
router.post("/send/:id", authUser, sendMessage);

export default router;
