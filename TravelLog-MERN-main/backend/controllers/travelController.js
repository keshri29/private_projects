import asyncHandler from "express-async-handler";
import travelModel from "../models/travelModel.js";

// GET /api/logs: Route to retrieve a list of all travel logs.
const getTravelLogs = asyncHandler(async (request, response) => {
    const logs = await travelModel.find({ user_id : request.user._id });

    response.status(200).json({
        travelLogs : logs
    });
    return;
});

// POST /api/logs: Route to create a new travel log.
const createTravelLog = asyncHandler(async (request, response) => {
    const { title, description, author, location_id } = request.body;
    const travelLog = await travelModel.findOne({title : title});

    if (travelLog){
        response.status(400);
        throw new Error("Travel log already exists");
    }

    if (!title) {
        response.status(401);
        throw new Error("Title is required");
    }

    const newTravelLog = await travelModel.create({
        user_id : request.user._id, 
        title : title,
        description : description,
        author : author,
        location_id : location_id
    });

    if (newTravelLog){
        response.status(200).json({
            message : "Successfully created",
            travelLog : newTravelLog
        })
    } else {
        response.status(500);
        throw new Error("Failed to create Travel Log");
    }
    return;
});
//what is the status protocol 200+ and 400+?

// GET /api/logs/:logId: Route to retrieve a specific travel log with its details and photos.
const getTravelLog = asyncHandler(async (request, response) => {
    const { logId } = request.params;
    const log = await travelModel.findOne({
        _id : logId, user_id : request.user._id
    });

    response.status(200).json({
        travelLog : log
    });
    return;
});

// PUT /api/logs/:logId: Route to update a specific travel log.
const updateTravelLog = asyncHandler(async (request, response) => {
    const { logId } = request.params;
    const { description } = request.body;
    const travelLog = await travelModel.findOne({ 
        _id : logId, user_id : request.user._id  
    });

    if (!travelLog){
        response.status(404);
        throw new Error("Travel log not found");
    }

    const updatedLog = await travelModel.updateOne(
        { _id : logId },
        { $set : {description : description}}
    );

    if (updatedLog !== 0){
        response.status(200).json({
            message : "Successfully updated log"
        });
    } else {
        response.status(500);
        throw new Error("Failed to update the Travel Log");
    }
    return;
});

// DELETE /api/logs/:logId: Route to delete a specific travel log.
const deleteTravelLog = asyncHandler(async (request, response) => {
    const { logId } = request.params;
    const travelLog = await travelModel.findOne({ 
        _id : logId, user_id : request.user._id 
    });
    
    if (!travelLog) {
        response.status(404);
        throw new Error("Travel log not found");
    }   

    const deletedLog = await travelModel.deleteOne(travelLog);
    if (deletedLog.deletedCount !== 0){
        response.status(200).json({
            message : "Successfully deleted"
        });
    } else {
        response.status(500);
        throw new Error("Unable to delete log");
    }
    return;
});


const uploadTravelImages = asyncHandler( async (request, response) => {
    let images = [];
    const { logId } = request.params;

    try {
        const travelLog = await travelModel.findOne({ 
            _id : logId, user_id : request.user._id
        });

        if (!travelLog){
            response.status(404);
            throw new Error("Travel log not found");
        }

        request.files.forEach((file) => {
            images.push(file.buffer.toString("base64"));
        });

        const updatedLog = await travelModel.updateOne(
            { _id : logId },
            { $set : { photos : images }}
        );

        if (updatedLog.modifiedCount !== 0){
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
    getTravelLogs,
    createTravelLog,
    getTravelLog,
    updateTravelLog,
    deleteTravelLog,
    uploadTravelImages
};

