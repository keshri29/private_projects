const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,


})
.then(()=>{
    console.log("connected to the database");
})
.catch((err)=>{
    console.error(err);
    console.log("could not connect to the database");
    process.exit(1);

})

};


