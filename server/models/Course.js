const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema ({
   courseName:{
    type:String,
    trim:true,
    required:true,
   },

  courseDescription:{
   type:String,
   required:true,
  },

   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },

    whatWillYouLearn:{
        type:String,
    },

courseContent:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Section",
}
],

ratingAndReviews:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ratingAndReviews",
}
],
price:{
   type:Number,
   required:true,
},

thumbNail:{
    type:String,
},

tag:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Tag",
},

studentsEnrolled:[
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    }
],

});

module.exports = mongoose.model("Course", courseSchema);