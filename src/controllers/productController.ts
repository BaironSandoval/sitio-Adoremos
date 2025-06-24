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
  try {
    const { id } = req.params;
    const { name, price, quantity, image } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};
// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};

