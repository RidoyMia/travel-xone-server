import express, { Router } from 'express';
import OrderController from './Order.controller';
const OrderRouter = express.Router()


OrderRouter.post('/create',OrderController.createOrderController);
OrderRouter.get('/getorder',OrderController.getOrderController);
export default OrderRouter;