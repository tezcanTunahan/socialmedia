import express from "express";
import {
  newConversation,
  getConv,
  getTwoUserConv,
} from "../controllers/conversation.js";

const router = express.Router();

// new conv
router.post("/", newConversation);
// get conv of a user
router.get("/:userId", getConv);
// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", getTwoUserConv);

export default router;
