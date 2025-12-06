import express from "express";
import multer from "multer";
import { handleIssue } from "../controllers/issueControllers.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("photoUrl"), handleIssue);

export default router;
