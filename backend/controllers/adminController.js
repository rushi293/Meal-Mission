import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Drives } from "../models/driveSchema.js";
import { Campaign } from "../models/campaignSchema.js";
import { validationResult } from 'express-validator';
import { blogPost } from "../models/blogPostSchema.js";

export const drivePost = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { _id, role,address, pincode, city, name } = req.user;
    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't post drive, you are not admin`, 400)
        );
    }

    if (!req.files) {
        new ErrorHandler(`Image could not get`, 400)
    }

    const image = `/uploads/admin_drive_images/${req.file.filename}`;

    const { food_name, no_of_meals, consent } = req.body;
    if (!food_name || !no_of_meals || !consent || !image) {
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const posted_by = _id;
    const drive = await Drives.create({
        food_name, no_of_meals, posted_by, consent, image , address, pincode,city, p_name:name
    });
    res.status(200).json({
        success: true,
        message: "Drive added Successfully",
        drive
    });
});

export const campaignPost = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { _id, role } = req.user;

    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't post review, you are not admin`, 400)
        );
    }

    if (!req.files) {
        new ErrorHandler(`Image could not get`, 400)
    }

    const image = `/uploads/admin_campaign_images/${req.file.filename}`;

    const { title, description, location, date } = req.body;
    if (!title || !description || !image || !location || !date) {
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const campaign = await Campaign.create({
        title, description, image, location, date
    });
    res.status(200).json({
        success: true,
        message: "Campaign Details added",
        campaign
    });
});

export const myDrives_active = catchAsyncError(async (req, res, next) => {
    const { _id, role } = req.user;
    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't post review, you are not admin`, 400)
        );
    }
    const drives = await Drives.find({ posted_by: req.user._id, active: true });
    res.status(200).json({
        success: true,
        drives,
    });
});

export const myDrives_inactive = catchAsyncError(async (req, res, next) => {
    const { _id, role } = req.user;
    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't post review, you are not admin`, 400)
        );
    }
    const drives = await Drives.find({ posted_by: req.user._id, active: false });
    res.status(200).json({
        success: true,
        drives,
    });
});

export const getCampaign = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    console.log(role);
    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't get campaign details, you are not Admin`, 400)
        );
    }
    const campaign = await Campaign.find({});
    res.status(200).json({
        success: true,
        message: "Fetched successfully",
        campaign
    });
});

export const blog_post = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;
    if (role !== 'admin') {
        return next(
            new ErrorHandler(`You can't post blogs, you are not Admin`, 400)
        );
    }

    const { title, topic, url, message } = req.body;
    if (!title || !topic || !url || !message) {
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    console.log("1");
    const blog = await blogPost.create({
        title, topic, url, message
    });
    console.log("2");
    res.status(200).json({
        success: true,
        message: "Blog Post Details added",
        blog
    });
});
