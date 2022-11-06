import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    userStatus: string;
    userType: string;
    address: string;
    nationality: string;
    dob: string;
    gender: string;
}

interface User{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    userStatus: string;
    userType: string;
    address: string;
    nationality: string;
    dob: string;
    gender: string;
}

const userSchema = new Schema<User>({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userStatus:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    nationality:{
        type: String,
        required: false
    },
    dob:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    }
}, { versionKey:false })

const UserModels = model<User>('User', userSchema)

export default UserModels;