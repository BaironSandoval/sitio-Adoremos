import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "clave-secreta";

export const protect = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ msg: "No autorizado, token faltante" });
    return; // ✅ Detenemos la ejecución
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next(); // ✅ Continuamos si es válido
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
    return; // ✅ Detenemos la ejecución en caso de error
  }
};
