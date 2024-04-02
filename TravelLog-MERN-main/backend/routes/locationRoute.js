import express from "express";
import {
    getLocation,
    getLocations,
    createLocation,
    deleteLocation,
    updateLocation,
    uploadLocationImages
} from "../controllers/locationController.js";
import { 
    authRequired 
} from "../middleware/authMiddleware.js";
import upload from "../config/storage.js";


const locationRouter = express();

locationRouter.route("/")
    .get(authRequired, getLocations)
    .post(authRequired, upload.single("image"), createLocation);


locationRouter.route("/:locationId")
    .get(authRequired, getLocation)
    .delete(authRequired, deleteLocation)
    .patch(authRequired, updateLocation);

locationRouter.route("/:locationId/upload")
    .post(authRequired, upload.array("images", 5), uploadLocationImages);


export default locationRouter;