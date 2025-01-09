//require("dotenv").config({path: './env'});

import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js"
dotenv.config({path: './env'});

connectDB()
  .then(() => {
    app.on("error", handleError);
    
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!", err);
  });

function handleError(error) {
  console.error("Express app error:", error);
}





/*
;( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", ()=>{
            console.error("ERROR:", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log("Server is listening.")
        })

    }catch(error){
        console.error("ERROR:", error);
        throw error
    }
})()
    */