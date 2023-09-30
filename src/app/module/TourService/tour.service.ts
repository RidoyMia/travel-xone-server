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
       
        
    
       
        const totalDocument = await TourModel.find({})
        const Something = await TourModel.find({$and : andconditions}).sort({CreatedAt : -1}).skip(totalSkip);
        const result = Something.slice(0,10)
      
        return {
            totalDocuments : totalDocument.length ,
            result
        }
    }
    else{
        const totalDocument = await TourModel.find({})
        const Something = await TourModel.find({}).sort({CreatedAt : -1}).skip(totalSkip);
        const result = Something.slice(0,10)
        return {
            totalDocuments : totalDocument.length,
            result
        }
    }

   

}
const updateTourService = async(queiryId : any,updatedData:any)  =>{
    console.log(updatedData,'updated')
    const resutl = await TourModel.updateOne( { _id: queiryId }, 
        updatedData, 
    { new: true });
    return resutl;
}
const deletedService = async(id : String) =>{
    const result = await TourModel.deleteOne({_id :id})
    return result
}

export default {
    CreateTourService,
    getTourByCountryService,
    getSingleTourById,
    getAllTourService,
    updateTourService,
    deletedService


}