import { Types } from "mongoose";
import { Tourservice } from "../TourService/tour.interface";

export interface Iorder  {

   
   name: string,
   email : string,
   phone :string,
   date : string,
   note : string,
   size : string,
   total : number

   TourId : Types.ObjectId | Tourservice
}




// const orderData = {
//     name,email,phone,date,size,note,TourId : tour?._id,total : tour?.Price * size
// }