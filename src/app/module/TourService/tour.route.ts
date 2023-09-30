import express from "express";
import tourController from "./tour.controller";
const tourRoute = express.Router();


tourRoute.post('/create',tourController.CreateTourController);
tourRoute.get('/alltour',tourController.getAllTourController)
tourRoute.post('/update/:id',tourController.updateController)
tourRoute.get('/country/:country',tourController.getTourByCountryController);
tourRoute.get('/:id',tourController.getSingleTourByIdController)
tourRoute.delete('/deleted',tourController.deleteController)

export default tourRoute;