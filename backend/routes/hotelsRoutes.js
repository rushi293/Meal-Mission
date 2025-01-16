import express from 'express';
const router = express.Router();
import { drivePost, myDrives_active, myDrives_inactive } from '../controllers/hotelsController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import multer from 'multer'

//Destructuring body and validationResult
import { body } from 'express-validator';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads/hotel_drive_images');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}_${Date.now()}.${fileExtension}`);
    },
});

const upload = multer({ storage });

router.post('/drive_post', upload.single('hotel_drive_image'),[
    //Validation using express-validator
    body('food_name', "Enter valid food_name!").isLength({ min: 3, max: 30 }),
    body('no_of_meals', "Atleast 5 meals required!").isNumeric({ min: 5 }),
], isAuthenticated, drivePost);

router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

// It is necessary to export module
export default router;
