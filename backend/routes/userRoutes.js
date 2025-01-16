import express from 'express';
const router = express.Router();
import { userLogin, userRegister, userLogout, getUser,getStats } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';

router.post('/register', [
    //Validation using express-validator
    body('name', "Enter valid name!").isLength({ min: 3, max: 30 }),
    body('mobile', "Enter valid mobile number!").isMobilePhone(),
    body('email', "Enter valid email address!").isEmail(),
    body('password', "Password should contain atleast 8 char with atleast one uppercase,lowercase,number and special character").isStrongPassword()
], userRegister);

router.post('/login', [
    //Validation using express-validator
    body('email', "Enter valid email address").isEmail(),
    body('password', "Incorrect password!").isStrongPassword()
], userLogin)

router.get('/getuser/:id', isAuthenticated , getUser);
router.get('/getStats/:id',getStats);
router.get('/logout', isAuthenticated, userLogout);

// It is necessary to export module
export default router;
