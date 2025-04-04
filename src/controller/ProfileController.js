import Project from "../model/Project.js";
import { catchError } from "../comman/commonFunction.js";


export const createProfile = async (req, res) => {
  const { userId, bio} = req.body;  
  try {
    const newProfile = await Profile.create({
      bio,
      userId,  
    });
    return res.status(201).json({
      status:201,
      message: 'Profile created successfully!',
      data:newProfile
    });
  } catch (error) {
      catchError(res,error)
  }
};

export const getProfile = async(req,res)=>{
    try{
         let userId = req.params.id
         const getData = await Profile.findByPk(userId);
         return res.status(200).json({
            status:200,
            message: ' get profile successfully!',
            data:getData
          });
    }catch(error){
        catchError(res,error)
    }
}


