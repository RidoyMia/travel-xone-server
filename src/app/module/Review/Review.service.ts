import { TourModel } from "../TourService/tour.model";
import { Ireview } from "./Review.interface";
import { ReviewModel } from "./Review.model";

const createReviewService = async(payload : Ireview) : Promise<Ireview | any> => {
    const result = await ReviewModel.create(payload);
    console.log(result)
    return result;
    
}

const getReviewByTourIdService = async(payload : any) : Promise<Ireview | any> =>{
    const result = await ReviewModel.find({TourId : payload}).sort({createdAt : -1});
    return result;

}

const getAllReviewService = async() : Promise<Ireview | any> =>{
    const result = await ReviewModel.find({});
    console.log(result,'get')
    return result;
}

export default {
    createReviewService,
    getReviewByTourIdService,
    getAllReviewService
}