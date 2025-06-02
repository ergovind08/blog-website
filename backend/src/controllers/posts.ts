import { Request, Response } from 'express';
import Post from '../models/Post';
import { AuthenticatedRequest } from '../middleware/auth';

export const createPost = async (req: AuthenticatedRequest, res: Response) => {
  const { title, content } = req.body;
  
  try {
    const post = await Post.create({
      title,
      content,
      author: req.user?._id
    });
    
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    let query = {};
    
    if (req.query.author) {
      query = { author: req.query.author };
    }
    
    const posts = await Post.find(query).populate('author', 'email').sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getMyPosts = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Get user ID from authenticated request (added by auth middleware)
    const userId = req.user?._id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Find posts only for this user
    const posts = await Post.find({ author: userId })
      .populate('author', 'email')
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};