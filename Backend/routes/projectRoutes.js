import express from 'express';
import { getAllProjects } from '../controllers/projectControllers.js';
import { createProject } from '../controllers/projectControllers.js';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);

export default router;
