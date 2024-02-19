import express from "express";
import authUser from "../middleware/auth.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", authUser, getUsersForSideBar);

export default router;
