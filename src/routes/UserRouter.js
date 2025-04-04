import { Router } from "express";
import dataValidation from "../middleware/Auth.js"
import{userRegister,getAllUser,getOneUser,updateOneUser,deleteOneUser} from"../controller/UserController.js"
const userRouter = Router()
userRouter.post("/user-Register",dataValidation,userRegister)
userRouter.get("/get-AllUser",getAllUser)
userRouter.get("/get-OneUser/:id",getOneUser)
userRouter.put("/update-OneUser/:id",updateOneUser)
userRouter.delete("/delete-OneUser/:id",deleteOneUser)
// userRouter.post("/user-Login",userLogin)
export default userRouter