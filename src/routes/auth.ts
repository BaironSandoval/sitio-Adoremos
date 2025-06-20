import express from 'express';
import { login } from '../controllers/authController';
const router = express.Router();
// Ruta para iniciar sesión
router.post('/login', (req, res, next) => {
  Promise.resolve(login(req, res)).catch(next);
});

export default router;
