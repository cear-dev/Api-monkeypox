import { Router } from 'express';
import { createCase, getAllCases, getRecentCases, updateCase, deleteCase } from '../controllers/case.controller';

const router = Router();

router.post('/casos', createCase);
router.get('/casos', getAllCases);
router.get('/casos/recent', getRecentCases);
router.put('/casos/:id', updateCase);
router.delete('/casos/:id', deleteCase);

export default router;