import express from 'express';
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// Ruta protegida para verificar sesión del admin
import { Request, Response } from 'express';

router.get('/me', protect, (req, res) => {
  const admin = (req as any).admin;
  res.json({ admin });
});

export default router;
