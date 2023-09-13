import mongoose, { Schema } from "mongoose";
import { Tourservice } from "./tour.interface";


const TourSchema = new Schema<Tourservice>({
    Country : {
        type : String,
        enum : ['Bangladesh','India','Nepal','Pakistan'],
        required : true
    },
    DivissionId :{
        type : String,
        required : true
    },
    TourType : {
        type : String,
        required : true
    },
    Spots : {
        type : [],
        required : true
    },
    Duration : {
        type : String,
        required : true
    },
    Price: {
        type : String,
        required : true
    },
    About : {
        type : String,
        required : true
    },
    included : {
        type : [],
        required : true
    },
    Pickup : {
        type : String,
        required : true
    },
    Pictures : {
        type : [],
        required : true
    }
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    }
})


export  const TourModel = mongoose.model('tour', TourSchema)