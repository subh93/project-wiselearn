import { Schema, model, Document } from "mongoose";

export interface StudentDocument extends Document{
    userID: string;
    rollnumber: string;
    std: string;
    collage_name: string;
    course_name: string;
    subjectID: string;
}

interface Student{
    userID: string;
    rollnumber: string;
    std: string;
    collage_name: string;
    course_name: string;
    subjectID: string;
}

const studentSchema = new Schema<Student>({
    userID:{
        type: String,
        required: true
    },
    rollnumber:{
        type: String,
        required: true
    },
    std:{
        type: String,
        required: true
    },
    collage_name:{
        type: String,
        required: true
    },
    course_name:{
        type: String,
        required: true
    },
    subjectID:{
        type: String,
        required: true
    }
}, { versionKey:false })

const UserModels = model<Student>('Student', studentSchema)

export default UserModels;