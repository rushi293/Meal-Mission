// import { catchAsyncError } from "../middlewares/catchAsyncError.js";
// import ErrorHandler from "../middlewares/error.js";
// import { User } from "../models/userSchema.js";
// import {OTP} from "../models/otpSchema.js";
// import nodemailer from 'nodemailer';
// import speakeasy from 'speakeasy';

// export const getOtp = catchAsyncError(async(req, res, next) => {
//     const {email} = req.body;
//     if(!email){
//         return new ErrorHandler("Email is required", 400);
//     }
//     const isEmail = await User.findOne({email});
//     if(isEmail) {
//         return next(new ErrorHandler("Email already Exists"));
//     }
//     // Generate OTP
//     const otpSecret = speakeasy.generateSecret().base32;
//     const otp = speakeasy.totp({
//         secret: otpSecret,
//         step: 3600 // OTP is valid for 1 hour (3600 seconds)
//     });
//     // Calculate OTP expiry time
//     const expiryTime = new Date();
//     expiryTime.setTime(expiryTime.getTime() + 3600000); // 1 hour from now

//     // Save OTP in the database
//     const otpDoc = await OTP.create({ email, otpValue: otp, expiryTime, otpSecret });
//     // Send OTP to user's email
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'deepsatasiya85@gmail.com',
//             pass: 'kxqh xesh imtc towa'
//         }
//     });
//     const mailOptions = {
//         from: 'deepsatasiya85@gmail.com ',
//         to: email,
//         subject: 'OTP Verification',
//         text: `Your OTP is: ${otp}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return next(new ErrorHandler('Failed to send OTP'));
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
//     res.status(200).json({
//         success: true,
//         message: "Otp Sent Successfully",
//         otpDoc
//     });
// });



import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { OTP } from "../models/otpSchema.js";
import nodemailer from 'nodemailer';
import speakeasy from 'speakeasy';
import dotenv from 'dotenv';
import validator from 'validator';

dotenv.config();

export const getOtp = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return next(new ErrorHandler("Email is required", 400));
    }

    if (!validator.isEmail(email)) {
        return next(new ErrorHandler("Invalid email format", 400));
    }

    const isEmail = await User.findOne({ email });
    if (isEmail) {
        return next(new ErrorHandler("Email already exists", 400));
    }

    // Generate OTP
    const otpSecret = speakeasy.generateSecret().base32;
    const otp = speakeasy.totp({
        secret: otpSecret,
        step: 3600 // OTP is valid for 1 hour
    });

    // Calculate OTP expiry time
    const expiryTime = new Date(Date.now() + 3600000); // 1 hour from now

    // Save OTP in the database
    const otpDoc = await OTP.create({ email, otpValue: otp, expiryTime, otpSecret });

    // Send OTP to user's email
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
            return next(new ErrorHandler('Failed to send OTP', 500));
        }
    });

    res.status(200).json({
        success: true,
        message: "OTP sent successfully"
    });
});
