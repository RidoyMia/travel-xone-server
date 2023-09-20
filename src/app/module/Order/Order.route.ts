import express, { Router } from 'express';
import OrderController from './Order.controller';
const OrderRouter = express.Router()


OrderRouter.post('/create',OrderController.createOrderController);
export default OrderRouter;