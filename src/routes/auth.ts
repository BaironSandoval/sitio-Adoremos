import { Router, Request, Response, NextFunction } from "express";
import { loginAdmin, registerAdmin } from "../controllers/authController";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  loginAdmin(req, res);
});
router.post("/register", (req: Request, res: Response) => {
  registerAdmin(req, res);
});

export default router;
