import mongoose, { Schema } from "mongoose";
import Iuser from "./Auth.interface";
import bcrypt from "bcrypt"
import config from "../../../config";







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
const saltRounds = 10;
userSchema.pre('save',async function (next) {
    let user = this;
    user.password = await bcrypt.hash(user.password, 12 )
    
    next()

})

export const Usermodel = mongoose.model('User', userSchema);