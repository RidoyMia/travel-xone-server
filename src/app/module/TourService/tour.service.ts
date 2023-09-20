import { Tourservice } from "./tour.interface";
import { TourModel } from "./tour.model";

const CreateTourService = async(tour : Tourservice) : Promise<Tourservice | any> =>{
    const result = await TourModel.create(tour);
    return result
}

const getTourByCountryService = async(country: any) : Promise<Tourservice | any> =>{
    console.log(country)
    const result = await TourModel.find({Country : country});
    return result
}

const getSingleTourById = async(id : any) : Promise<Tourservice | any > =>{

  const result = await TourModel.findById({_id : id});
  return result
}
const getAllTourService = async(queryField : any) : Promise<Tourservice | any> =>{
    const {page=1, searchText} = queryField;
    const queryFieldInDb = ['Country','DivissionId','Spots','About','Price','Pickup'];

    const totalSkip = (queryField.page - 1) * 10
    if(searchText){
        let andconditions : any = [];

        andconditions.push({
            $or: queryFieldInDb.map(field => ({
              [field]: {
                $regex: searchText,
                $options: 'i',
              },
            })),
          });
       
        
    
       
        
        const Something = await TourModel.find({$and : andconditions}).sort({CreatedAt : -1}).skip(totalSkip);
        const result = Something.slice(0,10)
      
        return {
            totalDocument : Something.length,
            result
        }
    }
    else{
        const Something = await TourModel.find({}).sort({CreatedAt : -1}).skip(totalSkip);
        const result = Something.slice(0,10)
        return {
            totalDocument : Something.length,
            result
        }
    }

   

}

export default {
    CreateTourService,
    getTourByCountryService,
    getSingleTourById,
    getAllTourService


}