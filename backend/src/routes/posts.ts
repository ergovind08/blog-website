import { Router } from 'express';
import { protect } from '../middleware/auth';
import { createPost, getPosts, getMyPosts } from '../controllers/posts';

const router = Router();

router.route('/')
  .post(protect, createPost)
  .get(getPosts);


router.get('/me', protect, getMyPosts);
export default router;