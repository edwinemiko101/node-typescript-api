import express, { Request, Response } from "express";
import multer from "multer";

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create multer instance
const upload = multer({ storage: storage });

// Upload route
router.post(
  "/upload",
  upload.single("image"),
  (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // Access the uploaded file details
    const file = req.file;
    console.log("Uploaded file:", file);

    // You can perform additional operations with the uploaded file here

    return res.status(200).json({ message: "File uploaded successfully" });
  }
);

export default router;
