import { Router } from "express";
import{createPost,getPost,getAllPost} from "../controller/PostController.js"
const postRouter =  Router();

postRouter.post("/create-Post",createPost)
postRouter.get("/get-Post",getPost)
postRouter.get("/getAll-Post",getAllPost)


export default postRouter