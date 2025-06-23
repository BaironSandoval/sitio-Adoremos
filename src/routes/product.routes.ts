import { Router } from "express";
import { createProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", protect, createProduct); // <-- esta línea maneja POST /api/products

export default router;
