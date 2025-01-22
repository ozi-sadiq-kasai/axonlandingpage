import createResearch from '../controllers/ResearchController.js';
import { Router } from 'express';
const router = Router();

router.post('/createResearch',createResearch)

export default router