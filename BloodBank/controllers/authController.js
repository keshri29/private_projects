const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerController = async (req,res) => {
 try{
   const exisitingUser = await  userModel.findOne({email:req.body.email});
   if(exisitingUser){
    return res.status(201).send({
        success: false,
        message:'Email Already Exists',
    });
   }

   //hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(res.body.password,salt);
   req.body.password = hashedPassword;

   //rest data
   const user = new userModel(req.body);
   await user.save()
   return res.status(202).send({
   message:"User Registerd Successfully",
   user,
   });
 }
 catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error In Register Api",
        error,
    });
 }
};

//login call back
const loginController=()=>{};

module.exports = {registerController,loginController};



