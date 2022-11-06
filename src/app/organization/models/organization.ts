import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document{
    orgID: string;
    orgname: string;
    address: string;
    estyear: string;
    orgowner: string; 
}

interface Organization{
    orgID: string;
    orgname: string;
    address: string;
    estyear: string;
    orgowner: string;
}

const userSchema = new Schema<Organization>({
    orgID:{
        type: String,
        required: true
    },
    orgname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    estyear:{
        type: String,
        required: false
    },
    orgowner:{
        type: String,
        required: false
    }
}, { versionKey:false })

const UserModels = model<Organization>('Organization', userSchema)

export default UserModels;