import { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", asyncHandler(getProducts));
router.post("/", protect, asyncHandler(createProduct)); // <-- esta línea maneja POST /api/products
router.put("/:id", protect, asyncHandler(updateProduct));
router.delete("/:id", protect, asyncHandler(deleteProduct));


export default router;
