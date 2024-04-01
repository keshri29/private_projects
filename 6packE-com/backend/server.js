const app = require("./app");

const dotenv = require("dotenv");




//config
dotenv.config({path:"backend/config.env"})

app.listen(process.env.PORT,()=>{
    console.log('serrver is working on http://localhost:$(process.env.PORT)')
})