
import { Router } from "express";
import{createProject,getAllProjects,getUserWithProjects} from "../controller/ProjectController.js"
const projectRouter = Router()
 projectRouter.post("/create-Project",createProject)
 projectRouter.get("/getAll-Projects",getAllProjects)
 projectRouter.get("/getUser-WithProjects",getUserWithProjects)

export default projectRouter