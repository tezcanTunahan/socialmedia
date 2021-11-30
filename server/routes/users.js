import express from "express";
import { updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);
// get a user
// follow a user
// unfollow a user

export default router;
