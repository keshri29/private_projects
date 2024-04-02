import  express  from "express";
import { config } from "dotenv";
import router from "./routes/router.js";

config({path:"./config.env"});

export  const app = express();



app.use("/api",router);