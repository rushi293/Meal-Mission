import express from "express";
import { getAllPost, addAnswer,addQuestion} from "../controllers/community.controller.js";

const route = express.Router();

route.post("/addQuestion",addQuestion);
route.post("/addAnswer",addAnswer);
route.get("/getAllCommunity",getAllPost)

export default route;