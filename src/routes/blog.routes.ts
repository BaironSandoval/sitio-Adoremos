import { Router } from "express";
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/blogController.js';
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/', asyncHandler(getAllPosts));
router.get('/:id', asyncHandler(getPostById));
router.post('/', protect, asyncHandler(createPost));
router.put('/:id', protect, asyncHandler(updatePost));
router.delete('/:id', protect, asyncHandler(deletePost));

export default router;