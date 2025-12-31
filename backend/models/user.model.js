import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type:Number,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role:{
        type:String,
        // whenever you get options you use enum
        enum:['student', 'recruiter'],
        required: true
    },
    profile: {
        bio:{type:String},
        skills:[{type:String}],// this will be an array and the items that comes here will be String
        resume: {type:String}, // URL to resume file
        resumeOriginalName: {type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, // for generating relation between company table and user table
        profilePhoto:{
            type:String,
            default:""
        }
    },
}, {timestamps:true} // so that the timestamp also gets recorded
);

//It defines a Model: It uses the Mongoose library to create a Model named User. This Model is like a blueprint or a constructor function that represents a collection in your MongoDB database. It links the userSchema (which defines the structure and rules for user data) to the database.
export const User = mongoose.model('User', userSchema);