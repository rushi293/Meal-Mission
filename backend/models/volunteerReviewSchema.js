import mongoose from 'mongoose';

const volunteerReviewSchema = new mongoose.Schema({
    for_drive: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Drives",
        required:true
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:[true,"Your Description will be very helpful to join other joinees"],
        minLength: [20, "Description must be of 20 characters"],
    },
    improvements:{
        type: String,
    },
    image:{
        type:String,
        required:[true,"Please provide an image"]
    }
},{timestamps:true}); 

export const VolunteerReview = new mongoose.model('volunteerReview',volunteerReviewSchema);