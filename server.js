import express from "express"
import {ConnectDB} from "./src/config/ConfigDB.js"
import userRouter from "./src/routes/UserRouter.js"
import profileRouter from "./src/routes/ProfileRouter.js"
import postRouter from "./src/routes/PostRouter.js"
import projectRouter from "./src/routes/ProjectRouter.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.use("/user",userRouter)
app.use("/profile",profileRouter)
app.use("/post",postRouter)
app.use("/project",projectRouter)
let port = process.env.PORT
app.listen(port,()=>{
    ConnectDB()
    console.log("server is running on port 9000")
})