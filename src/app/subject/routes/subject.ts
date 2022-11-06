import express from 'express';
import { createsubject, deletesubject, subjectById, subjects, updatesubject } from '../controllers/subject';

const router = express.Router();

router.post('/create-subject', createsubject);
router.delete('/delete-subject', deletesubject);
router.put('/update-subject', updatesubject);
router.get('/subject', subjects);
router.get('/subject/:id', subjectById);

export default router;