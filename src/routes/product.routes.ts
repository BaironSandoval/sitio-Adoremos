import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
router.get("/", getProducts);
router.post("/", protect, createProduct); // <-- esta línea maneja POST /api/products

export default router;
