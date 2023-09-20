import express,{Response,Request} from "express"
import Iuser from "./Auth.interface"
import { Usermodel } from "./Auth.model"
import  jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import config from "../../../config"

const CreateUserService = async(user : Iuser) : Promise<Iuser | any> =>{

    const result = await Usermodel.create(user);
    return result
}
const GetUserService = async(email: any) :Promise<Iuser | any> =>{
  const result = await Usermodel.findOne({email : email});
  return result
}
const loginUserService = async(payload:any) =>{
  console.log(payload.password)
  const isExist = await Usermodel.findOne({email : payload.email});
 
   if(!isExist){
    
   
      return 'not match'
     }
     else{
      const isPassMathc = await bcrypt.compare(payload.password,isExist.password);
     
       if(!isPassMathc){
        return 'not'
       }else{
        console.log(isPassMathc)
        const accesstoken = jwt.sign({email : isExist.email,role:isExist.role},config.accesstoken as string,{expiresIn : config.accesstokenE});
        const refreshtoken = jwt.sign({email : isExist.email,role:isExist.role},config.refreshtoken as string,{expiresIn : config.refreshtokenE});
        return {
         email : isExist.email,
         
         accesstoken,
         refreshtoken
        }
       }
     }
   }
    
 




export default  {
    CreateUserService,
    GetUserService,
    loginUserService
}