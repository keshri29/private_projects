import express from "express";
import {
    signInUser,
    signUpUser,
    signOutUser,
    refreshToken
} from "../controllers/authController.js";
import {
    authRequired,
    refreshRequired
} from "../middleware/authMiddleware.js";


const authRouter = express();


authRouter.post("/signin", signInUser);
authRouter.post("/signup", signUpUser);
authRouter.post("/signout", signOutUser);
authRouter.post("/refresh",
    refreshRequired,
    refreshToken);


export default authRouter;