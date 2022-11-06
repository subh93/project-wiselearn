import { Schema, model, Document } from "mongoose";

export interface TeacherDocument extends Document{
    userID: string;
    subjectID: string;
    orgID: string;
    batch: string;
    specialization: string;
}

interface Teacher{
    userID: string;
    subjectID: string;
    orgID: string;
    batch: string;
    specialization: string;
}

const teacherSchema = new Schema<Teacher>({
    userID:{
        type: String,
        required: true
    },
    subjectID:{
        type: String,
        required: true
    },
    orgID:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    }
}, { versionKey:false })

const TeacherModels = model<Teacher>('Teacher', teacherSchema)

export default TeacherModels;