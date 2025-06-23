import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost.js';

export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener artículos' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = new BlogPost(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el artículo' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el artículo' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const updated = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el artículo' });
  }
};
