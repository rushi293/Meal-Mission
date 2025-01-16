import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,"Please provide a Title for the Campaign"]
    },
    description:{
        type:String,
        required:[true,"Description will be very helpful to join other joinees"],
        minLength: [20, "Description must be of 20 characters"],
    },
    image:{
        type:String,
        required:[true,"Please provide an image"]
    },
    location:{
        type: String,
        required: [true,"Please enter a Location"]
    },
    date: {
        type: Date,
        required: [true,"Please provide date for a campaign"]
    }
},{timestamps:true}); 

export const Campaign = new mongoose.model('campaign',campaignSchema);