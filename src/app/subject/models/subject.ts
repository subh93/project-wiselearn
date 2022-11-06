import { Schema, model, Document } from "mongoose";

export interface SubjectDocument extends Document{
    subjectID: string;
    subjectname: string;
}

interface Subject{
    subjectID: string;
    subjectname: string;
}

const subjectSchema = new Schema<Subject>({
    subjectID:{
        type: String,
        required: true
    },
    subjectname:{
        type: String,
        required: true
    }
}, { versionKey:false })

const SubjectModels = model<Subject>('Subject', subjectSchema)

export default SubjectModels;