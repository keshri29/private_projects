import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;


    const MONGO_URI ='mongodb://keshri:egv1ZZuog8GPRAL3@ac-oomcyoh-shard-00-00.pyldlyb.mongodb.net:27017,ac-oomcyoh-shard-00-01.pyldlyb.mongodb.net:27017,ac-oomcyoh-shard-00-02.pyldlyb.mongodb.net:27017/?ssl=true&replicaSet=atlas-cvdbvr-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;