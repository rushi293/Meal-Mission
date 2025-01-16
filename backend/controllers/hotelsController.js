import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import {User} from "../models/userSchema.js";
import { Drives } from "../models/driveSchema.js";
import { validationResult } from 'express-validator';

export const drivePost  = catchAsyncError(async(req, res, next)=>{
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler( errorMsg ,400));
    }
    const {_id,role,address,pincode,city,name} = req.user;
    if (role !== 'hotel') {
        return next(
          new ErrorHandler(`You can't post drive, you are not hotel`, 400)
        );
    }

    if(!req.files){
        new ErrorHandler(`Image could not get`, 400)
    }

    const image = `/uploads/hotel_drive_images/${req.file.filename}`;
    const { food_name, no_of_meals, consent }= req.body;
    if( !food_name || !no_of_meals || !consent || !image ){
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const posted_by = _id;
    const drive = await Drives.create({
        food_name, no_of_meals, posted_by, consent,image,address,pincode,city,p_name:name
    });
    const updatedHotel = await User.findByIdAndUpdate(_id, { $inc: { ndrive: 1 } }, { new: true });
    res.status(200).json({
        success: true,
        message: "Drive added Successfully",
        drive
    });
});

export const myDrives_active = catchAsyncError(async (req, res, next) => {
    const drives = await Drives.find({ posted_by: req.user._id, active: true});
    res.status(200).json({
      success: true,
      drives,
    });
});

export const myDrives_inactive = catchAsyncError(async (req, res, next) => {
    const drives = await Drives.find({ posted_by: req.user._id, active: false});
    res.status(200).json({
      success: true,
      drives,
    });
});