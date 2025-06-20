import multer from 'multer';
import { cloudinary } from '../utils/cloudinary';
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
