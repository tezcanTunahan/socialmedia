import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} from "../controllers/users.js";

const router = express.Router();

// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);
// get a user
router.get("/:id", getUser);
// follow a user
router.put("/:id/follow", followUser);
// unfollow a user
router.put("/:id/unfollow", unfollowUser);
export default router;
