import { Ireview } from "./Review.interface";
import express, {Request,Response} from "express"
import ReviewService from "./Review.service";

const createReviewController = async(req:Request,res : Response) : Promise<Ireview | any> => {
    try{
      
        const review = req.body;
        console.log(review,"review")
        const result = await ReviewService.createReviewService(review);
      
  
           
           res.status(200).send({
              getting : true,
              message : 'successfully created data',
              data : result
             })
      
       
   
       }catch(e){
           res.status(400).send({
               getting : e,
               message : 'Something went wrong',
               data : false
              })
       }
} 


const getSingleReviewByTourIdController = async(req:Request,res : Response) : Promise<Ireview | any> => {
    try{
        const tourId = req.params.id;
      
        const result = await ReviewService.getReviewByTourIdService(tourId);
      
        
           
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