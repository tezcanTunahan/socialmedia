import express from "express";
import { users } from "../controllers/users.js";

const router = express.Router();

router.get("/", users);

export default router;
