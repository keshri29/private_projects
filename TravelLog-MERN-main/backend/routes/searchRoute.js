import express from "express";
import { 
    searchContent 
} from "../controllers/searchController.js";


const searchRouter = express();
searchRouter.get("/", searchContent);


export default searchRouter;