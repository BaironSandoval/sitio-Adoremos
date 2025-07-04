import { Request, Response } from "express";
import Product from "../models/Product.js";

// GET /api/products
export const getProducts = async (_req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

// POST /api/products
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, description, category, images } = req.body;

  if (!Array.isArray(images)) {
    return res.status(400).json({ message: "El campo 'images' debe ser un arreglo." });
  }

  const newProduct = new Product({
    name,
    price,
    quantity,
    description,
    category,
    images,
  });

  await newProduct.save();
  res.status(201).json(newProduct);
};

// GET /api/products/:id
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, quantity, description, category, images } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity, description, category, images },
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
