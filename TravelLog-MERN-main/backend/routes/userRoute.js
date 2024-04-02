import express from "express";
import {
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} from "../controllers/userController.js";
import {
    authRequired
} from "../middleware/authMiddleware.js";


const userRouter = express();


userRouter.route("/:username")
    .get(authRequired, getUserProfile)
    .put(authRequired, updateUserProfile)
    .patch(authRequired, updateUserPassword);


export default userRouter;