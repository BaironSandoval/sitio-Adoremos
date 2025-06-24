import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost';

export const getAllPosts = async (_: Request, res: Response) => {
  const posts = await BlogPost.find();
  res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) return res.status(404).json({ message: 'No encontrado' });
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const post = new BlogPost(req.body);
  await post.save();
  res.status(201).json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ message: 'No encontrado' });
  res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: 'No encontrado' });
  res.json({ message: 'Eliminado' });
};
