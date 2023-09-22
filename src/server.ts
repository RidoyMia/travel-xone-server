import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap(){
try{
    await mongoose.connect(config.database as string);
       app.listen(5000, () => {
       console.log(`Example app listening on port 5000`)
  })
}catch(e){
    console.log(e)
}
}
bootstrap()