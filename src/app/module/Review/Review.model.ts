import mongoose, { Schema } from "mongoose";
import { Ireview } from "./Review.interface";

const reviewSchema = new Schema<Ireview>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    TourId : {
        type : String,
        required : true
    }
},{
    timestamps : true,toJSON : {
        virtuals : true
    }
})


 export const ReviewModel = mongoose.model('review',reviewSchema) 