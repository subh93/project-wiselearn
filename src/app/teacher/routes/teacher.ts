import express from 'express';
import { createteacher, deleteteacher, teacherById, teachers, updateteacher } from '../controllers/teacher';

const router = express.Router();

router.post('/create-teacher', createteacher);
router.delete('/delete-teacher', deleteteacher);
router.put('/update-teacher', updateteacher);
router.get('/teacher', teachers);
router.get('/teacher/:id', teacherById);

export default router;