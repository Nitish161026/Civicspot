import express from 'express';
import { handleContact } from '../controllers/contactControllers.js';

const router = express.Router();

router.post('/', handleContact);

export default router;
