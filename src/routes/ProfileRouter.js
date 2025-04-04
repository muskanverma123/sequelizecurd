import { Router } from "express";
import{createProfile,getProfile} from "../controller/ProfileController.js"
const profileRouter =  Router();

profileRouter.post("/create-Profile",createProfile)
profileRouter.get("/get-Profile/:id",getProfile)

export default profileRouter