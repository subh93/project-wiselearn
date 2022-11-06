import express from 'express';

import { createuser, deleteuser, updateuser, users, userById } from '../controllers/user';

const router = express.Router();

router.post('/create-user', createuser);
router.delete('/delete-user', deleteuser);
router.put('/update-user', updateuser);
router.get('/user', users);
router.get('/user/:id', userById);

export default router;