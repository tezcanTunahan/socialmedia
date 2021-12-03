import express from "express";
import { createPost, updatePost } from "../controllers/post.js";

const router = express.Router();

// create post
router.post("/", createPost);
// update post
router.put("/:id", updatePost);
// delete post
// like post
// get post
// get timeline posts

export default router;
