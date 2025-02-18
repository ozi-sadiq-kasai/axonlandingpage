import express from 'express';
import { createResearch,getResearch } from '../controllers/ResearchController.js';

const router = express.Router();

router.post('/research', createResearch);
router.get('/admin',getResearch)

export default router;