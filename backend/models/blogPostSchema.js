import mongoose from 'mongoose';
import validator from 'validator';

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Provide the title of blog"],
    },
    topic: {
        type: String,
        required: [true, "Provite the topic of blog"],
    },
    url: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        minLength: [100, "Description must be of 100 characters"],
    },
}, { timestamps: true });

export const blogPost = new mongoose.model('blogPost', blogPostSchema);