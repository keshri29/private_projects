import jwt from "jsonwebtoken";


const generateAccessToken = (response, userId) => {

    const secretKey = process.env.JWT_SECRET_KEY || "1z2b3c";
    const environment = process.env.NODE_ENV || "development";

    const token = jwt.sign({ userId }, secretKey,  {
        expiresIn : "1d"
    });

    response.cookie("access_token", token, {
        httpOnly : true,
        secure : (environment === "production") ? true : false,
        sameSite : "strict",
        maxAge : 1000 * 60 * 60 * 24
    });
    return;
};


const generateRefreshToken = (response, userId) => {

    const secretKey = process.env.JWT_SECRET_KEY || "1z2b3c";
    const environment = process.env.NODE_ENV || "development";

    const token = jwt.sign({ userId }, secretKey,  {
        expiresIn : "7d"
    });

    response.cookie("refresh_token", token, {
        httpOnly : true,
        secure : (environment === "production"),
        sameSite : "strict",
        maxAge : 1000 * 60 * 60 * 24 * 7
    });
    return;
};

const deleteTokens = (request, response) => {
    request.user = null;
    response.cookie("access_token", "", {
        httpOnly : true,
        maxAge : new Date(0)
    });
    response.cookie("refresh_token", "", {
        httpOnly : true,
        maxAge : new Date(0)
    });
};


export {
    generateAccessToken,
    generateRefreshToken,
    deleteTokens
};