import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const authRequired = asyncHandler( async (request, response, next) => {
    const secretKey = process.env.JWT_SECRET_KEY || "1z2b3c";
    const token = request.cookies.access_token;
    
    if (token){
        try {
            const decode = jwt.verify(token, secretKey);
            request.user = await userModel.findById(decode.userId).select("-password");
            next();
        } catch (error) {
            response.status(401);
            throw new Error("Invalid token");
        }
    } else {
        response.status(404);
        throw new Error("Token does not exists");
    }
    return;
});


const refreshRequired = asyncHandler( async (request, response, next) => {
    const secretKey = process.env.JWT_SECRET_KEY || "1z2b3c";
    const token = request.cookies.refresh_token;
    
    if (token){
        try {
            const decode = jwt.verify(token, secretKey);
            
            request.user = await userModel.findById(decode.userId).select("-password");

            if (!request.user){
                response.status(404);
                throw new Error("User does not exists");
            }

            next();
        } catch (error) {
            response.status(401);
            throw new Error("Invalid token");
        }
    } else {
        response.status(404);
        throw new Error("Token does not exists");
    }
    return;
});


export {
    authRequired,
    refreshRequired
};