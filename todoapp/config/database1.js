const mongoose = require('mongoose');

require('dotenv').config();

const DbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URl,{
        useNewUrlParser: true ,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Database connected successfully") })
        .catch((error)=>{
            console.log(`Error connecting to the database : ${error}`);
            console.error(error.message);

            process.exit(1);
    });
}


module.exports=DbConnect;