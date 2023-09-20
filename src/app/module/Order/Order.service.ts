import { Iorder } from "./Order.interface"
import { Ordermodel } from "./Order.model"
const createOrderService = async(orderiteam : Iorder) : Promise<Iorder | any>  =>{
    console.log(orderiteam,'iteam')
    const createdOrder = await Ordermodel.create(orderiteam);
    const result = await createdOrder.populate('TourId');
    console.log(result)
    
    return result
}


export default {
    createOrderService
}