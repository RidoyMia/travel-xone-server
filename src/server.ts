import mongoose from "mongoose";
import app from "./app";

async function bootstrap(){
try{
    await mongoose.connect("mongodb+srv://travelxone:travelxone@cluster0.ddsoyqm.mongodb.net/travel-xone?retryWrites=true&w=majority");
       app.listen(4000, () => {
       console.log(`Example app listening on port 4000`)
  })
}catch(e){
    console.log(e)
}
}
bootstrap()