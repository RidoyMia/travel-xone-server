import express,{Request,Response} from "express"
import { Tourservice } from "./tour.interface";
import tourService from "./tour.service";
import { TourModel } from "./tour.model";

const CreateTourController = async(req:Request,res: Response) : Promise<Tourservice | any > =>{
    try{
        const tour = req.body;
        const result = await tourService.CreateTourService(tour);
      
      
           
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


const getTourByCountryController = async(req:Request,res: Response) : Promise<Tourservice | any > =>{
    try{
        const country = req.params.country;
        const result = await tourService.getTourByCountryService(country);
      
      
           
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


const getSingleTourByIdController = async(req:Request,res: Response) : Promise<Tourservice | any > =>{
    try{
        const id = req.params.id;
        const result = await tourService.getSingleTourById(id);
      
      
           
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


const getAllTourController = async(req:Request,res: Response) : Promise<Tourservice | any > =>{
  
    try{
        const queryField = req.query;
        
        const result = await tourService.getAllTourService(queryField);
       
        
      
      
           
           res.status(200).send({
              getting : true,
              message : 'successfully created data',
              data : result,
              
             })
      
       
   
       }catch(e){
           res.status(400).send({
               getting : false,
               message : 'Something went wrong',
               data : false
              })
       }
}
const updateController = async(req:Request,res:Response) =>{
    try{
        const queryField = req.params.id;
        const updatedData = req.body;
        console.log(updatedData,'ami')
        
        const result = await tourService.updateTourService(queryField,updatedData);
       
        
      
      
           
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
const deleteController = async(req:Request,res:Response)=>{
    try{
    
        const deletedId = req.body;
        const result= await tourService.deletedService(deletedId?._id)
        console.log(deletedId)
       
       
        
      
      
           
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
    CreateTourController,
    getTourByCountryController,
    getAllTourController,
    getSingleTourByIdController,
    updateController,
    deleteController


}