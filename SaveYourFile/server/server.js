const express = require ("express" );

const app = express();

app.get("/", (req,res)=>{
    res.send("api running successfully");

})

app.listen(4000);