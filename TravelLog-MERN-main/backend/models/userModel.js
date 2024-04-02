// username: String (required, unique) - The username of the user.
// email: String (required, unique) - The email address of the user.
// password: String (required) - The hashed password of the user.
// profileImage: String - The URL of the user's profile image.
// bio: String - A short bio or description of the user.

import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profileImage : {
        type : String,
        default : null
    },
    bio : {
        type : String,
        default : ""
    }
}, {
    timestamps : true
});


userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    return;
});

userSchema.methods.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
};

const userModel = mongoose.model("user", userSchema);

export default userModel; 