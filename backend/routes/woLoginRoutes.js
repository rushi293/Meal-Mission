import express from 'express';
const router = express.Router();
import { getFeed, postContact, getUsers ,get_blog_post} from '../controllers/woLoginController.js';

router.get('/get_feed', getFeed);
router.get('/get_users', getUsers);
router.post('/contact_us', postContact);
router.get('/get_blog_post', get_blog_post);


export default router;