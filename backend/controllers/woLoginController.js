import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import {VolunteerReview} from "../models/volunteerReviewSchema.js"
import {User} from "../models/userSchema.js";
import {ContactUs} from "../models/contactUsSchema.js";
import nodemailer from 'nodemailer';
import { blogPost } from "../models/blogPostSchema.js";

export const getFeed = catchAsyncError(async (req, res, next) => {
    const review = await VolunteerReview.find({}).sort({ timestamps: -1 });
    res.status(200).json({
        success: true,
        message: "Fetched successfully",
        review
    });
});
// {user: id},'_id title description target cnt lastUpdated'
export const getUsers = catchAsyncError(async (req, res, next) => {
    const user = await User.find({role:"volunteer"},"name city badge ndrive").sort({ ndrive : -1 });
    res.status(200).json({
        success: true,
        message: "Users fetched successfully!",
        user,
    });
});

export const postContact = catchAsyncError(async(req, res, next) => {
    const { email, queries, fname, lname, mobile, company } = req.body;
    if(!email || !queries || !fname || !lname || !mobile){
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const contactUs = await ContactUs.create({
        email, queries, fname, lname, mobile, company
    });
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hppappu03@gmail.com',
            pass: 'khhe pivx joni scqq'
        }
    });
    const mailOptions = {
        from: 'hppappu03@gmail.com',
        to: 'smitdhimar9@gmail.com',
        subject: 'User Inquiry: Queries Regarding NGO',
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
        
            .message-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
        
            p {
              color: #333;
              line-height: 1.6;
            }
        
            span {
              font-weight: bold;
              color: #3498db;
            }
          </style>
        </head>
        
        <body>
          <div class="message-container">
            <p>I hope this message finds you well.</p>
            <p>We wanted to bring to your attention that a <span>${email}</span> has reached out with some queries regarding our NGO. They seem interested and have expressed a desire to learn more about our initiatives, projects, or any other related information.</p>
            <p>Could you please take a moment to address their concerns and provide them with the necessary information? Your prompt response would greatly assist in fostering a positive relationship with our audience and potential supporters.</p>
            <p>Thank you for your attention to this matter.</p>
            <p>Best regards,<br>Meal Mission</p>
          </div>
        </body>
        
        </html>
        
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return next(new ErrorHandler('Failed to send OTP'));
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json({
        success: true,
        message: "We will Contact you shortly",
        contactUs
    });
});

export const get_blog_post = catchAsyncError(async (req, res, next) => {
  const allBlogs = await blogPost.find({}).sort({ timestamps: -1 });;
  res.status(200).json({
      success: true,
      message: "Fetched successfully",
      allBlogs
  });
});