import multer from "multer";
import { storage } from "../utils/cloudinary.js";

const upload = multer({ storage }); // CloudinaryStorage ya sube la imagen

export default upload;
