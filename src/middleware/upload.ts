import multer from "multer";

const memoryStorage = multer.memoryStorage(); // le ponemos otro nombre por claridad
const upload = multer({ storage: memoryStorage });

export default upload;