import express from "express"
import usercontoller from "./Auth.controller"
const UserRoute = express.Router()


UserRoute.post('/createUser',usercontoller.createUserController);
UserRoute.get('/getUser',usercontoller.GetuserController)

export default UserRoute;