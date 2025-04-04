import Project from "../model/Project.js";
import User from "../model/User.js";
import { catchError } from "../comman/commonFunction.js";

export const createProject = async (req, res) => {
    const { userId,title, description, status } = req.body;  
    try {
      const newProject = await Project.create({
        title,
        description,
        status
      });
  
      return res.status(201).json({
        status: 201,
        message: 'Project created successfully!',
        data: newProject
      });
    } catch (error) {
      return catchError(res, error);
    }
  };
  
  // controllers/projectController.js

export const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.findAll();
      return res.status(200).json({
        status: 200,
        message: 'Projects fetched successfully!',
        data: projects
      });
    } catch (error) {
      return catchError(res, error);
    }
  };




export const getUserWithProjects = async (req, res) => {
  const  userId  = req.body.userId; 
  try {
    const user = await User.findOne(userId,{
      include: {
        model: Project,
      },
    });
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "User and associated projects fetched successfully!",
        data: {
          user: user.name,
          projects: user.Projects.map(project => project.title),
        },
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: `User with ID ${userId} not found.`,
      });
    }
  } catch (error) {
    console.error("Error fetching user with projects:", error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred while fetching the user and projects.",
      error: error.message,
    });
  }
};
