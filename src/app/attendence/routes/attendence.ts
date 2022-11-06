import express from 'express';

import { attendenceById, attendences, createattendence, deleteattendence, updateattendence } from '../controllers/attendence';

const router = express.Router();

router.post('/create-attendence', createattendence);
router.delete('/delete-attendence', deleteattendence);
router.put('/update-attendence', updateattendence);
router.get('/attendence', attendences);
router.get('/attendence/:id', attendenceById);

export default router;