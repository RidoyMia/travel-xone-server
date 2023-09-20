import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap(){
try{
    await mongoose.connect(config.database as string);
       app.listen(4000, () => {
       console.log(`Example app listening on port 4000`)
  })
}catch(e){
    console.log(e)
}
}
bootstrap()