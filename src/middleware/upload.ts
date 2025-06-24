import multer from "multer";
//import { storage } from "../utils/cloudinary.js";

const storage = multer.memoryStorage(); // Usamos memoria para manejar el buffer de la imagen

const upload = multer({ storage }); // CloudinaryStorage ya sube la imagen

export default upload;
