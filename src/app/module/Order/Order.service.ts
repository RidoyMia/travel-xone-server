import  jwt  from "jsonwebtoken";
import { Iorder } from "./Order.interface"
import { Ordermodel } from "./Order.model"
import config from "../../../config";
const createOrderService = async(orderiteam : Iorder) : Promise<Iorder | any>  =>{
    console.log(orderiteam,'iteam')
    const createdOrder = await Ordermodel.create(orderiteam);
    const result = await createdOrder.populate('TourId');
    console.log(result)
    
    return result
}
const getOrderService = async(payload : any) : Promise<Iorder | any> =>{
   
    const decoded = await jwt.verify(payload,config.accesstoken as string);
    if(decoded?.role ==='user'){
     const result = await Ordermodel.find({email : decoded.email})  ;
     return result;
    
    }
    else{
        const result = await Ordermodel.find() ;
        return result
    }
    

}


export default {
    createOrderService,
    getOrderService
}