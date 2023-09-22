import  jwt  from "jsonwebtoken";
import { Iorder } from "./Order.interface"
import { Ordermodel } from "./Order.model"
import config from "../../../config";
const createOrderService = async(orderiteam : Iorder) : Promise<Iorder | any>  =>{
  
    const createdOrder = await Ordermodel.create(orderiteam);
    const result = await createdOrder.populate('TourId');
   
    
    return result
}
const getOrderService = async(payload : any) : Promise<Iorder | any> =>{
   
    const decoded = await jwt.verify(payload,config.accesstoken as string);
    if(decoded?.role ==='user'){
     const result = await Ordermodel.find({email : decoded.email}).populate('TourId')  ;
     
     return result;
    
    }
    else{
        const result = await Ordermodel.find({}).populate('TourId') ;
       
        return result;
    }
    

}
const getGroup = async() => {


    
    // const amimodel = [
    //     {
    //       "_id": 1,
    //       "title": "Event 1",
    //       "date": "2023-09-15T08:00:00.000Z"
    //     },
    //     {
    //       "_id": 2,
    //       "title": "Event 2",
    //       "date": "2023-09-18T14:30:00.000Z"
    //     },
    //     {
    //       "_id": 3,
    //       "title": "Event 3",
    //       "date": "2023-10-05T10:00:00.000Z"
    //     },
    //     {
    //       "_id": 4,
    //       "title": "Event 4",
    //       "date": "2023-10-12T19:45:00.000Z"
    //     }
    //   ]
      const result = await Ordermodel.aggregate([
        {
          $project: {
            year: { $year: { $dateFromString: { dateString: "$date" } } },
            month: { $month: { $dateFromString: { dateString: "$date" } } },
            
          },
        },
        {
          $group: {
            _id: { year: "$year", month: "$month" },
            total: { $sum: 1 },
           
          },
        },
        {
          $project: {
            _id: 0,
            year: "$_id.year",
            month: "$_id.month",
            total : 1
            
          },
        },
      ])
      return result
    // const result = await Ordermodel.aggregate([
    //     {
    //       $group: {
    //         _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
    //         count: { $sum: 1 }
    //       }
    //     }
    //   ]);
    
}


export default {
    createOrderService,
    getOrderService,
    getGroup
}