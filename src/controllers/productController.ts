import { Request, Response } from "express";
import Product from "../models/Product.js";

// GET /api/products
export const getProducts = async (_req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

// POST /api/products
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, image } = req.body;

  const newProduct = new Product({ name, price, quantity, image });
  await newProduct.save();

  res.status(201).json(newProduct);
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(product);
};

// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({ message: "Producto eliminado" });
};
