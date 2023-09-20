import express,{Request,Response} from "express";
import Iuser from "./Auth.interface";
import UserService from "./Auth.servrice"

const createUserController = async(req:Request,res:Response) : Promise<Iuser | any> =>{
    try{
       const user = req.body;
      
       const result = await UserService.CreateUserService(user)
       res.status(200).send({
        getting : true,
        message : 'successfully get data',
        data : result
       })

    }catch(e){
        res.status(400).send({
            getting : false,
            message : 'Something went wrong',
            data : false
           })
    }
}


const GetuserController = async(req:Request,res:Response): Promise<Iuser | any>=>{
   try{
     const email = req.query.email;
     const result = await UserService.GetUserService(email);
   
   
        
        res.status(200).send({
           getting : true,
           message : 'successfully get data',
           data : result
          })
   
    

    }catch(e){
        res.status(400).send({
            getting : false,
            message : 'Something went wrong',
            data : false
           })
    }
}
const loginUserController = async(req: Request,res:Response) =>{
    try{
        const userInfo = req.body
        const result = await UserService.loginUserService(userInfo);
        const {refreshtoken:string,...others} = result;
        await res.cookie('refreshToken', result.refreshtoken)
        res.status(200).send({
            getting : true,
            message : 'successfully get data',
            data : others
           })

    }catch(e){
        res.status(400).send({
            getting : false,
            message : 'Something went wrong',
            data : false
           })
    }
}


export default {
    createUserController,
    GetuserController,
    loginUserController
}