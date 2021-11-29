import express from "express";
import { users } from "../controllers/users.js";

const router = express.Router();

router.get("/", users);
// update user
// delete user
// get a user
// follow a user
// unfollow a user

export default router;
