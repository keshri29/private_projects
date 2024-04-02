import express from "express";
import {
    getTravelLog,
    getTravelLogs,
    updateTravelLog,
    deleteTravelLog,
    createTravelLog, 
    uploadTravelImages
} from "../controllers/travelController.js";
import {
    authRequired
} from "../middleware/authMiddleware.js";
import upload from "../config/storage.js";

const travelRouter = express();


travelRouter.route("/")
    .get(authRequired, getTravelLogs)
    .post(authRequired, createTravelLog);

travelRouter.route("/:logId")
    .get(authRequired, getTravelLog)
    .patch(authRequired, updateTravelLog)
    .delete(authRequired, deleteTravelLog);

travelRouter.route("/:logId/upload")
    .post(authRequired, upload.array("images", 5), uploadTravelImages);


export default travelRouter;