import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import { 
    generateHash 
} from "../utils/hashGenerator.js";

// GET /api/profile/:username: Route to retrieve a user's profile information and travel logs.
const getUserProfile = asyncHandler( async (request, response) => {
    response.status(200).json({
        user : {
            username : request.user.username,
            email : request.user.email,
            profileImage : request.user.profileImage,
            bio : request.user.bio,
            createdAt : request.user.createdAt
        }
    });
    return;
});

// PUT /api/profile/:username: Route to update a user's profile information.
const updateUserProfile = asyncHandler( async (request, response) => {
    
    const { username, profileImage, bio } = request.body;

    const user = await userModel.findOne({ username }).select("-password");

    if (user) {
        response.status(400);
        throw new Error("Username already exists");
    }

    const updatedProfile = await userModel.updateOne(
        { _id : request.user._id },
        { $set : {
            username : username || request.user.username,
            profileImage : profileImage || request.user.profileImage,
            bio : bio || request.user.bio
        }}
    );

    if (updatedProfile.modifiedCount !== 0) {
        response.status(202).json({
            message : "Update User Profile",
        });
    } else {
        response.status(500);
        throw new Error("Failed updating the user profile");
    }
    
    return;
});

const updateUserPassword = asyncHandler( async (request, response) => {
    
    const { old_password, new_password } = request.body;

    const user = await userModel.findOne(request.user);

    if (!user.checkPassword(old_password)){
        response.status(400);
        throw new Error("Incorrect password");
    }

    if (new_password.length < 6){
        response.status(400);
        throw new Error("Password must at least be 6 characters long");
    }

    const newPassword = await generateHash(new_password);
    const updatedProfile = await userModel.updateOne(
        { _id : request.user._id },
        { $set : { password : newPassword }}
    );

    if (updatedProfile.modifiedCount !== 0){
        response.status(200).json({
            message : "Update User Password",
        });
    } else {
        response.status(500);
        throw new Error("Failed updating the user password");
    }
    
    return;
});


export {
    getUserProfile,
    updateUserPassword,
    updateUserProfile
};