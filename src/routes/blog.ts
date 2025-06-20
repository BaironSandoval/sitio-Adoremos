import express from 'express';
import { getAllPosts, createPost, deletePost, updatePost } from '../controllers/blogController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllPosts);

// Solo admins
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

export default router;
