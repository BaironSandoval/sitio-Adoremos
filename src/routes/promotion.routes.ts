import express from "express";
import {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
} from "../controllers/promotionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Ruta base: /api/promotions
router.get("/", asyncHandler(getPromotions));
router.get("/:id", asyncHandler(getPromotionById));
router.post("/", protect, asyncHandler(createPromotion));
router.put("/:id", protect, asyncHandler(updatePromotion));
router.delete("/:id", protect, asyncHandler(deletePromotion));

export default router;