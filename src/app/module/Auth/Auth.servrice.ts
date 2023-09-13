import express,{Response,Request} from "express"
import Iuser from "./Auth.interface"
import { Usermodel } from "./Auth.model"

const CreateUserService = async(user : Iuser) : Promise<Iuser | any> =>{
    const result = await Usermodel.create(user);
    return result
}
const GetUserService = async(email: any) :Promise<Iuser | any> =>{
  const result = await Usermodel.findOne({email : email});
  return result
}



export default  {
    CreateUserService,
    GetUserService
}