import { Router, Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
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

router.post("/", upload.single("image"), async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No se subió ninguna imagen" });
      return;
    }

    console.log("📸 Imagen recibida:", {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "ecommerce", // opcional: carpeta en cloudinary
          resource_type: "image",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      stream.end(req.file.buffer);
    });

    const imageUrl = (result as any).secure_url;
    res.json({ imageUrl });
  } catch (error) {
    console.error("❌ Error al subir imagen a Cloudinary:", error);
    res.status(500).json({ message: "Error al subir imagen" });
  }
});

export default router;
