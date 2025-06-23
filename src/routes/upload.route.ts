import { Router, Request } from "express";
import type multer from "multer";
import upload from "../middleware/upload.js";

// Extiende la interfaz Request para incluir 'file'
declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File;
    }
  }
}

const router = Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: "No se subió ninguna imagen" });
    return; // ✅ importante para el tipado de Express
  }

  res.json({ imageUrl: (req.file as any).path });
  return; // ✅ también aquí
});

export default router;
