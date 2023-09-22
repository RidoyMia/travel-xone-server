import express from "express"
import usercontoller from "./Auth.controller"
const UserRoute = express.Router()


UserRoute.post('/createUser',usercontoller.createUserController);
UserRoute.post('/login',usercontoller.loginUserController);
UserRoute.get('/admin',usercontoller.getAdminController);
UserRoute.get('/alluser',usercontoller.getAlluser);
UserRoute.delete('/:email',usercontoller.deleteuser);

// UserRoute.get('/getUser',usercontoller.GetuserController)

export default UserRoute;