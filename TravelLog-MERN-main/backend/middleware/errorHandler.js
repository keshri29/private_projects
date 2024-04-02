const notFound = (request, response, next) => {
    const error = new Error(`Route '${request.originalUrl}' not found`);
    response.status(404);
    next();
    return;
};


const errorHandler = (error, request, response, _) => {
    const message = error.message || "Internal Server Error";
    const statusCode = response.statusCode === 200 ? 
        500 : response.statusCode;

    const environment = process.env.NODE_ENV || "development";
    
    response.status(statusCode).json({
        message : message,
        stack : (environment === "production") ?
            null : error.stack
    });

    return;
}; 


export { 
    notFound,
    errorHandler
};