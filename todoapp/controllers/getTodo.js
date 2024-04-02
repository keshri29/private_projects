const Todo = require("../models/Todo");

exports.getTodo = async (req,res)=>{
  try{
    //fetch all todo items from db
       const todos = await Todo.find({});

       //response update
       res.status(200).json({
        success:true,
        data:todos,
        message:"entire todo data is fetched",
       });

  }
  catch(err){
       console.error(err);
      res.status(500).json({
        success:false,
        error:err.message,
        message:"server error",
      });
  }
}