import { Schema, model, Document } from "mongoose";

export interface AttendenceDocument extends Document{
    userID: string;
    attendence_status: string;
}

interface Attendence{
    userID: string;
    attendence_status: string;
}

const attendenceSchema = new Schema<Attendence>({
    userID:{
        type: String,
        required: true
    },
    attendence_status:{
        type: String,
        required: true
    }
}, { versionKey:false })

const AttendenceModels = model<Attendence>('Attendence', attendenceSchema)

export default AttendenceModels;