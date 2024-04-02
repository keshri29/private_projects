import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import locationRouter from "./routes/locationRoute.js";
import searchRouter from "./routes/searchRoute.js";
import travelRouter from "./routes/travelRoute.js";
import userRouter from "./routes/userRoute.js";

import {
    notFound, 
    errorHandler
} from "./middleware/errorHandler.js";


dotenv.config();
connectDB();


const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));
app.use(cookieParser());
app.use(cors());


app.use("/api/auth", authRouter);
app.use("/api/location", locationRouter);
app.use("/api/search", searchRouter);
app.use("/api/log", travelRouter);
app.use("/api/user", userRouter);


app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}/`);
});