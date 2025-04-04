import Post from "../model/Post.js";
import { catchError } from "../comman/commonFunction.js";


export const createPost = async (req, res) => {
  const { userId,title,content} = req.body;  
  try {
    const newPost = await Post.create({
        userId, 
      title,
      content,
    });
    return res.status(201).json({
      status:201,
      message: 'Post created successfully!',
      data:newPost
    });
  } catch (error) {
      catchError(res,error)
  }
};

export const getPost = async(req,res)=>{
    try{
         let userId = req.body.userId
         const getData = await Post.findAll({
            where: {
              userId: userId,  
            },
          });
         return res.status(200).json({
            status:200,
            message: ' get post successfully!',
            data:getData
          });
    }catch(error){
        catchError(res,error)
    }
}


export const getAllPost = async(req,res)=>{
    try{
         const getData = await Post.findAll()
         return res.status(200).json({
            status:200,
            message: ' get post successfully!',
            data:getData
          });
    }catch(error){
        catchError(res,error)
    }
}

  
  


