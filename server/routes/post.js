import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  timelinePost,
} from "../controllers/post.js";

const router = express.Router();

// create post
router.post("/", createPost);
// update post
router.put("/:id", updatePost);
// delete post
router.delete("/:id", deletePost);
// like post
router.put("/:id/like", likePost);
// get post
router.get("/:id", getPost);
// get timeline posts
router.get("/timeline/all", timelinePost);

export default router;
