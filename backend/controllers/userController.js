import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";
import { validationResult } from 'express-validator';
import { OTP } from "../models/otpSchema.js";
import nodemailer from 'nodemailer';
import { Drives } from "../models/driveSchema.js";

export const userRegister = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { role, name, mobile, email, age, address, pincode, city, password, otp } = req.body;
    if (!role || !name || !mobile || !email || !password || !city || !otp) {
        return next(new ErrorHandler("Please fill full registration form"));
    }
    const isEmail = await User.findOne({ email });
    if (isEmail) {
        return next(new ErrorHandler("Email already Exists"));
    }
    
    const otpDoc = await OTP.findOne({ email });
    if (!otpDoc) {
        return next(new ErrorHandler("OTP not found"));
    }
    // Verify OTP value
    console.log("OTP provided:", otp, typeof otp);
console.log("OTP in database:", otpDoc.otpValue, typeof otpDoc.otpValue);
    // console.log("hello world");
    if (otp !== otpDoc.otpValue) {
        return next(new ErrorHandler("Invalid OTP"));
    }
    // Verify OTP expiry time (optional, depending on your requirements)
    if (otpDoc.expiryTime < Date.now()) {
        return next(new ErrorHandler("OTP expired"));
    }

    const user = await User.create({
        role, name, mobile, email, age, address, pincode, city, password
    });
    res.status(200).json({
        success: true,
        message: "User Registered Successfully",
        user
    });

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'deepsatasiya85@gmail.com',
            pass: 'kxqh xesh imtc towa'
        }
    });

    const mailOptions = {
        from: 'deepsatasiya85@gmail.com',
        to: email,
        subject: 'Welcome to Our NGO Community!',
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
        
            .welcome-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
        
            h1 {
              color: #333;
              font-size: 1.5rem;
              margin-bottom: 10px;
            }
        
            p {
              color: #555;
              line-height: 1.6;
              margin-bottom: 15px;
            }
        
            .thank-you {
              color: #333;
              font-weight: bold;
            }
        
            .signature {
              color: #777;
            }
          </style>
        </head>
        
        <body>
          <div class="welcome-container">
            <h1>Welcome to our NGO community, ${name}!</h1>
            <p>We are delighted to have you join us in our mission to make a positive impact on the lives of those in need. Your registration marks the beginning of a journey towards creating a better world together.</p>
            <p>As a member of our NGO, you will play a vital role in supporting our initiatives, whether it's through volunteering, donations, or spreading awareness. Together, we can make a meaningful difference in the lives of the underprivileged and marginalized communities.</p>
            <p class="thank-you">Thank you for choosing to be a part of our noble cause. We look forward to working with you and creating lasting change.</p>
            <p class="signature">Best regards,<br>Meal Mission</p>
          </div>
        </body>
        
        </html>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return next(new ErrorHandler('Failed to send mail'));
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

export const userLogin = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { role, email, password } = req.body;
    if (!role || !email || !password) {
        return next(new ErrorHandler("Please Provide Role, Email and Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 400))
    }
    if (user.role !== role) {
        return next(
            new ErrorHandler(`User with provided email and role not found!`, 404)
        );
    }
    sendToken(user, 200, res, "Logged In Successfully")
});

export const userLogout = catchAsyncError(async (req, res, next) => {
    res.status(201).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "User Logged Out Successfully"
    })
})

export const getUser = catchAsyncError(async (req, res, next) => {
    // const user = req.user;
    const id = req.params.id;

    const user = await User.findById({ _id: id }, "name role badge point email mobile city age");
    if (user) {

        res.status(200).json({
            success: true,
            user,
        });
    }
    else {
        res.status(404).json({ msg: "Cannot find user" });
    }
});
export const getStats = catchAsyncError(async (req, res, next) => {
    try {
        const id = req.params.id;
        const user=await Drives.find({posted_by:id});
        
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ err });
    }
})