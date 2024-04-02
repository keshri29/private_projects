const Todo = require('../models/Todo')

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new todo obj and insert in db
        const  response = await Todo.create({title,description});
        //send a json response with a success  flag
        res.status(200).json(
            {
            success:true,
            data:response,
            message:"entry created"
            }
        );
    }
    catch(err){
     console.error(err);
     console.log(err);
     res.status(500)
     .json({
        success : false ,
        data:"internal server error hai",
        message:err.message,
     })
    }
}
























