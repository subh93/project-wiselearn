import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './db';
import userRoutes from './src/app/user/routes/user';
import orgRoutes from './src/app/organization/routes/organization';
import studentRoutes from './src/app/student/routes/student';
import teacherRoutes from './src/app/teacher/routes/teacher';
import subjectRoutes from './src/app/subject/routes/subject';
import attendenceRoutes from './src/app/attendence/routes/attendence';

dotenv.config();
const _PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/v1/api', userRoutes);
app.use('/v1/api', orgRoutes);
app.use('/v1/api', studentRoutes);
app.use('/v1/api', teacherRoutes);
app.use('/v1/api', subjectRoutes);
app.use('/v1/api', attendenceRoutes);

app.listen(_PORT, async() => {
    await db();
    console.log(`Server is running on port ${_PORT}`);
})
