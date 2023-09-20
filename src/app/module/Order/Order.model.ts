import mongoose, { Schema } from "mongoose";
import { Iorder } from "./Order.interface";

const orderSchema = new Schema<Iorder>({
    
 email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    total : {
        type : Number,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    TourId : {
        type : Schema.Types.ObjectId,
        ref : 'tour',
        required : true
    },
    note : {
        type : String,
        required : true
    }
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    }
})


export const Ordermodel = mongoose.model("Order",orderSchema)