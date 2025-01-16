import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    answer:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const communitySchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    question:{
        type:String,
        unique:true,
        required:true,
    },
    tags:{
        type:[String]
    },
    answers:{
        type:[answerSchema]
    },
},{timestamps:true})

const Community = mongoose.model("community",communitySchema);
export default Community;