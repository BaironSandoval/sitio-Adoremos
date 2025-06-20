import express from 'express';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

// Ruta protegida para verificar sesión del admin
router.get('/me', protect, (req, res) => {
  const admin = (req as any).admin;
  res.json({ admin });
});

export default router;
