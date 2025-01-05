//require("dotenv").config({path: './env'});

import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({path: './env'});

connectDB();






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