import asyncHandler from "express-async-handler";
import locationModel from "../models/locationModel.js";

// GET /api/locations: Route to retrieve a list of all locations or destinations.
const getLocations = asyncHandler( async (request, response) => {
    const locations = await locationModel.find();
    
    response.status(200).json({
        locations : locations   
    });
    return;
});

// POST /api/locations: Route to create a new location.
const createLocation = asyncHandler( async (request, response) => {
    const { name, description, country, region } = request.body;
    const location = await locationModel.findOne({ name : name });    

    if (location) {
        response.status(400);
        throw new Error("Location already exists");
    }

    try {
        const newLocation = await locationModel.create({
            name : name,
            description : description,
            country : country,
            region : region
        });
    
        response.status(200).json({
            message : "Successfully created location",
            location : newLocation
        });
    } catch (error){
        response.status(500);
        throw new Error("Failed to create location");
    }
    return;
});

// GET /api/locations/:locationId: Route to retrieve a specific location with its details and associated travel logs.
const getLocation = asyncHandler( async (request, response) => {
    const { locationId } = request.params;
    const location = await locationModel.findOne({ _id : locationId });

    if (!location){
        response.status(404);
        throw new Error("Location not found");
    }

    response.status(200).json({
        location : location
    });
    return;
});

const updateLocation = asyncHandler( async (request, response) => {
    const { locationId } = request.params;
    const { description } = request.body;
    const location = await locationModel.findOne({ _id : locationId });

    if (!location) {
        response.status(404);
        throw new Error("Location does not exists");
    }

    const updatedLocation = await locationModel.updateOne(
        { _id : locationId },
        { $set : {
            description : description || location.description
        }}
    );

    if (updatedLocation.modifiedCount !== 0){
        response.status(200).json({
            message : "Successfully updated description"
        });
    } else {
        response.status(500);
        throw new Error("Unable to update description");
    }

    return;
}); 

const deleteLocation = asyncHandler( async (request, response) => {
    const { locationId } = request.params;
    const location = await locationModel.findOne({ _id : locationId });

    if (!location){
        response.status(404);
        throw new Error("Location does not exists");
    }

    const deletedLocation = await locationModel.deleteOne({ _id : locationId });
    if (deletedLocation.deletedCount !== 0) {
        response.status(200).json({
            message : "Successfully deleted"
        });
    } else {
        response.status(500);
        throw new Error("Unable to delete location");
    }
    return;
});

// ==================== Uploads
const uploadLocationImages = asyncHandler( async (request, response) => {
    let images = [];
    const { locationId } = request.params;
    
    try {
        const location = await locationModel.findOne({ _id : locationId });

        if (!location) {
            response.status(404);
            throw new Error("Location does not exists");
        }
        
        request.files.forEach((file) => {
            images.push(file.buffer.toString("base64"));
        });
        
        const updatedLocation = await locationModel.updateOne(
            { _id : locationId },
            { $set : { photos : images }}
        );

        if (updatedLocation.modifiedCount !== 0){
            response.status(200).json({
                message : "Successfully uploaded images"
            });
        } else {
            response.status(500);
            throw new Error("Unable to upload images");
        }
      
    } catch (error) {
        response.status(500);
        throw new Error("Failed to upload images");
    }
    return;
});


export {
    getLocation,
    createLocation,
    getLocations,
    updateLocation,
    deleteLocation,
    uploadLocationImages
}
