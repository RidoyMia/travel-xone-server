import mongoose, { Schema } from "mongoose";
import Iuser from "./Auth.interface";






const userSchema = new mongoose.Schema<Iuser>({
    email : {
        type : String,
        required : [true,"email is required"],
        unique :true
    },
    password : {
        type : String,
        required : [true,"password is required"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
    },
},{
    timestamps :true,
    toJSON : {
        virtuals : true
    }
});

export const Usermodel = mongoose.model('User', userSchema);