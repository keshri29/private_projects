import mongoose from "mongoose";


const connectDB = async () => {
    
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB host: ${db.connection.host}`);
    } catch (error){
        console.log(`Error: ${error.message}`);
    }

    return;
};


export default connectDB;