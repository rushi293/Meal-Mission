import express from 'express';
const router = express.Router();
import { reviewPost, joinDrive,myDrives_active, myDrives_inactive, getReviewPost } from '../controllers/volunteerController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import multer from 'multer';

//Destructuring body and validationResult
import { body } from 'express-validator';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads/review_post_images');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}_${Date.now()}.${fileExtension}`);
    },
});

const upload = multer({ storage });

router.post('/review_post/:drive_id',upload.single('review_post_image'), isAuthenticated, reviewPost);

// we showing active and inactive drives to user 
router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

// from above drives user can join drive 
router.get('/join_drive/:id', isAuthenticated, joinDrive);
router.get('/get_Review_post', isAuthenticated, getReviewPost);

// It is necessary to export module
export default router;
