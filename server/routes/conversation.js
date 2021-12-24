import express from "express";
import { newConversation, getConv } from "../controllers/conversation.js";

const router = express.Router();

// new conv
router.post("/", newConversation);
// get conv of a user
router.get("/:userId", getConv);

export default router;
