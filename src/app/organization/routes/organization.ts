import express from 'express';

import { createorg, deleteorg, org, orgId, updateorg } from '../controllers/organization';

const router = express.Router();

router.post('/create-organization', createorg);
router.delete('/delete-organization', deleteorg);
router.put('/update-organization', updateorg);
router.get('/organization', org);
router.get('/organization/:id', orgId);

export default router;