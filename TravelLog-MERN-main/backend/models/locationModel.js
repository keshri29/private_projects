// name: String (required) - The name of the location or destination.
// description: String - A description or details about the location.
// photos: Array of Strings - URLs of photos showcasing the location.
// country: String - The country where the location is situated.
// region: String - The region or state where the location is situated.
// latitude: Number - The latitude coordinates of the location.
// longitude: Number - The longitude coordinates of the location.

import mongoose from "mongoose";


const locationSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : { 
        type : String, 
        default : ""
    },
    photos : [{type : String, default : null}],
    country : {
        type : String,
        default : ""
    },
    region : {
        type :String,
        default : ""
    },
});


const locationModel = mongoose.model("location", locationSchema);

export default locationModel;