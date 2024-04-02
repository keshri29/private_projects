import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import { 
    generateAccessToken,
    generateRefreshToken,
    deleteTokens
} from "../utils/tokenGenerator.js";

// POST /api/signup: Route to register a new user.
const signUpUser = asyncHandler( async (request, response) => {

    const { username, email, password } = request.body;

    const user = await userModel.findOne({ username, email });

    if (user) {
        response.status(400);
        throw new Error("User already exists");
    } 

    const newUser = await userModel.create({
        username : username,
        email : email,
        password : password
    });

    if (newUser) {
        generateAccessToken(response, newUser._id);
        generateRefreshToken(response, newUser._id);
        response.status(200).json({
            message : "Successfully logged in",
            user : {
                username : newUser.username,
                email : newUser.email,
                profileImage : newUser.profileImage,
                bio : newUser.bio
            }
        });
    } else {
        response.status(500);
        throw new Error("Something went wrong");
    }

    return;
});

// POST /api/login: Route to authenticate and log in a user.
const signInUser = asyncHandler( async (request, response) => {

    const { email, password } = request.body;

    const user = await userModel.findOne({ email });

    if (!user){
        response.status(404);
        throw new Error("User does not exists");
    }

    if (await user.checkPassword(password)){
        generateAccessToken(response, user._id);
        generateRefreshToken(response, user._id);
        response.status(200).json({
            message : "Successfully signed in",
            user : {
                username : user.username,
                email : user.email,
                profileImage : user.profileImage,
                bio : user.bio
            }
        })
    } else {
        response.status(403);
        throw new Error("Incorrect password");
    }
    
    return;
});

// POST /api/logout: Route to log out the currently authenticated user.
const signOutUser = asyncHandler( async (request, response) => {
    deleteTokens(request, response);
    response.status(200).json({
        message : "Successfully logged out"
    });
    return;
});

const refreshToken = asyncHandler( async (request, response) => {
    generateAccessToken(response, request.user._id);
    response.status(201).json({
        message : "Refreshed token"
    });
    return;
});


export {
    signInUser, 
    signOutUser,
    signUpUser,
    refreshToken
};