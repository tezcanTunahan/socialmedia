import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getFriends,
} from "../controllers/users.js";

const router = express.Router();

// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);
// get a user
router.get("/", getUser);
// follow a user
router.put("/:id/follow", followUser);
// unfollow a user
router.put("/:id/unfollow", unfollowUser);
// get friends
router.get("/friends/:userId", getFriends);
export default router;
