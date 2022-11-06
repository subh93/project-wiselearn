import express from 'express';
import { createstudent, deletestudent, studentById, students, updatestudent } from '../controllers/student';


const router = express.Router();

router.post('/create-student', createstudent);
router.delete('/delete-student', deletestudent);
router.put('/update-student', updatestudent);
router.get('/student', students);
router.get('/student/:id', studentById);

export default router;