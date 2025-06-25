import { Request, Response } from "express";
import Promotion from "../models/Promotion.js";

// Obtener todas las promociones
export const getPromotions = async (_req: Request, res: Response) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener promociones" });
  }
};

// Obtener una promoción por ID
export const getPromotionById = async (req: Request, res: Response) => {
  try {
    const promo = await Promotion.findById(req.params.id);
    if (!promo) return res.status(404).json({ message: "Promoción no encontrada" });
    res.json(promo);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener la promoción" });
  }
};

// Crear una nueva promoción
export const createPromotion = async (req: Request, res: Response) => {
  const { title, image } = req.body;

  if (!title || !image) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newPromo = new Promotion({ title, image });
    const saved = await newPromo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error al crear la promoción" });
  }
};

// Actualizar promoción
export const updatePromotion = async (req: Request, res: Response) => {
  try {
    const updated = await Promotion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Promoción no encontrada" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar la promoción" });
  }
};

// Eliminar promoción
export const deletePromotion = async (req: Request, res: Response) => {
  try {
    const deleted = await Promotion.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Promoción no encontrada" });
    res.json({ message: "Promoción eliminada" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar la promoción" });
  }
};