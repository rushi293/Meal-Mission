import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["hotel", "volunteer"],
        required: [true, "Please Select one Role"]
    },
    name: {
        type: String,
        required: [true, "Please Provide Your Name"],
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"]
    },
    mobile: {
        type: String,
        unique: true,
        required: [true, "Please Provide Mobile no."],
        validate: {
            validator: function (v) {
                return validator.isMobilePhone(v, 'en-IN');
            },
            message: "Invalid Mobile number"
        }
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Provide Your Email"],
        validate: [validator.isEmail, "Please Provide a Valid Email"]
    },
    age: {
        type: Number,
        validate: {
            validator: function (v) {
                return Number.isInteger(v) && v >= 0;
            },
            message: '{VALUE} is not a valid age'
        },
    },
    address: {
        type: String,
        minLength: [20, "Minimum 20 character allowed"],
        maxLength: [50, "Maximum 50 character allowed"],
        required: [function () {
            return this.role === 'hotel'; // Requires pincode if role is 'hotel'
        }, "Address required"]
    },
    pincode: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[1-9]{1}\d{5}$/.test(v);
            },
            message: props => `${props.value} is not a valid pincode!`
        },
        required: [function () {
            return this.role === 'hotel'; // Requires pincode if role is 'hotel'
        }, "Address required"]
    },
    city: {
        type: String,
        required: [true, 'Please provide a city name'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minLength: [8, "Password must contain at least 3 characters"],
        maxLength: [32, "Password cannot exceed 32 characters"],
        select: false
    },
    badge: {
        type: String,
        enum: ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze', "Spark", null],
        default: function () {
            return this.role === 'volunteer' ? "Spark" : null;
        }
    },
    point: {
        type: Number,
        default: function () {
            return this.role === 'volunteer' ? 0 : 5;
        }
    },
    ndrive: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

//hashing the pasword
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//comparing passswrod
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//generating a jwt token for authorization
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("user", userSchema);
