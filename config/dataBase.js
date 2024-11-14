import mongoose from "mongoose";

async function dataBaseConnection(){
    try {
await mongoose.connect(process.env.URI_MONGO);
console.log("Connected to database...");
    }catch (error){
        console.error(error);
    }
}

dataBaseConnection();