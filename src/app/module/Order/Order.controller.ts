import { Iorder } from "./Order.interface";
import express,{Request,Response} from "express"
import OrderService from "./Order.service";

const createOrderController = async(req: Request,res:Response) : Promise<Iorder | any> =>{
    try{
       const orderdata = req.body
        console.log(orderdata,'orderData')
      const result = await OrderService.createOrderService(orderdata)
        console.log(result)
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
    createOrderController
}