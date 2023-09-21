import { Ireview } from "./Review.interface";
import express, {Request,Response} from "express"
import ReviewService from "./Review.service";

const createReviewController = async(req:Request,res : Response) : Promise<Ireview | any> => {
    try{
        console.log(req.body)
        const review = req.body;
        const result = await ReviewService.createReviewService(review);
      
      console.log(result)
           
           res.status(200).send({
              getting : true,
              message : 'successfully created data',
              data : result
             })
      
       
   
       }catch(e){
           res.status(400).send({
               getting : e.message,
               message : 'Something went wrong',
               data : false
              })
       }
} 


const getSingleReviewByTourIdController = async(req:Request,res : Response) : Promise<Ireview | any> => {
    try{
        const tourId = req.params.id;
        console.log(tourId)
        const result = await ReviewService.getReviewByTourIdService(tourId);
      
         console.log(result)
           
           res.status(200).send({
              getting : true,
              message : 'successfully created data',
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


const getAllReviewController = async(req:Request,res : Response) : Promise<Ireview | any> => {
    try{
        
        const result = await ReviewService.getAllReviewService();
      
      
           
           res.status(200).send({
              getting : true,
              message : 'successfully created data',
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

export default {
    createReviewController,
    getSingleReviewByTourIdController,
    getAllReviewController
}