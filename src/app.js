// here the main server code...

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

//common practice to make instance of express object

const app = express();
//configuration for cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


//middlewares for basic routing and other configuration

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import userRouter from "./routes/user.routes.js"



//route declaration
app.use("/api/v1/users", userRouter);
//http://localhost:8000//api/v1/users/register
//http://localhost:8000//api/v1/users/login





//export the app
export { app } 