import { Iorder } from "./Order.interface";
import express,{Request,Response} from "express"
import OrderService from "./Order.service";

const createOrderController = async(req: Request,res:Response) : Promise<Iorder | any> =>{
    try{
       const orderdata = req.body
       console.log(orderdata,'createOrder')
      const result = await OrderService.createOrderService(orderdata)
       
        res.status(200).send({
            getting : true,
              message : 'successfully created data',
              data : result,
        })
       }catch(e){
           res.status(400).send({
               getting : e,
               message : 'Something went wrong',
               data : false
              })
       }
}
const getByGroup = async(req: Request,res:Response) => {
    const result = await OrderService.getGroup();
    res.send({result})
} 
const getOrderController = async(req: Request,res:Response) : Promise<Iorder | any> =>{
  try{
     const accesstoken = req?.headers?.authorization?.split(" ")[1];
     
     
    const result = await OrderService.getOrderService(accesstoken)
      
      res.status(200).send({
          getting : true,
            message : 'successfully created data',
            data : result,
      })
     }catch(e){
         res.status(400).send({
             getting : e,
             message : 'Something went wrong',
             data : false
            })
     }
}


export default {
    createOrderController,
    getOrderController,
    getByGroup
}