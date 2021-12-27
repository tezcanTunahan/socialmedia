import express from "express";
import { addMessage, getMessage } from "../controllers/message.js";

const router = express.Router();

//add
router.post("/", addMessage);
//get
router.get("/:conversationId", getMessage);
export default router;
