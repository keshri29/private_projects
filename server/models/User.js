const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
firstName:{
   type:String,
   required:true,
   trim:true,
},

lastName:{
    type:String,
    required:true,
    trim:true,
 },

email:{
        type:String,
        required:true,
        trim:true,
},

password:{
    type:String,
    required:true,
 },

 accountType:{
  type:String,
  enum:["admin", "students", "instructor"],
  require:true,
 },

 additionalDetails:{
   type:mongoose.Schema.Types.ObjectId,
  require:true,
 ref:"profile",
 },

 courses:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"course",
 },

image:{
    type:String,
require:true,
},

courseProgress:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"courseProgress",
}
],
});

module.exports=mongoose.model("User", userSchema);