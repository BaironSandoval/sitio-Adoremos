import express from "express";
import {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
} from "../controllers/promotionController";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Ruta base: /api/promotions
router.get("/", asyncHandler(getPromotions));
router.get("/:id", asyncHandler(getPromotionById));
router.post("/", asyncHandler(createPromotion));
router.put("/:id", asyncHandler(updatePromotion));
router.delete("/:id", asyncHandler(deletePromotion));

export default router;
