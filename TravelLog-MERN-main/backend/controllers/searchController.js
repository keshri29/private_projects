import asyncHandler from "express-async-handler";

// GET /api/search: Route to perform searches for travel logs, locations, or specific content.
const searchContent = asyncHandler( async(request, response) => {
    response.status(200).json({
        message : "Search"
    });
});


export { searchContent };