import User from "../model/User.js";
import bcryptjs from "bcryptjs";
import{catchError} from "../comman/commonFunction.js"
import { Sequelize } from "sequelize";


export const userRegister =  async(req,res)=>{
    const{name,email,password,number} = req.body
    try{
       const existingEmail = await User.findOne({where:{email:req.body.email}})
       if(existingEmail){
        return res.status(400).json({
            status:400,
            message:"this email is already used",
            data:[]
        })
       }
       const existingNumber = await User.findOne({where:{number:req.body.number}})
       if(existingNumber){
        return res.status(400).json({
            status:400,
            message:"this number is already used",
            data:[]
        })
       }

       let userPassword = req.body.password
       let saltCount = 10
       let hashPassword  = await bcryptjs.hash(userPassword,saltCount)

       let addUser = await User.create({name,email,number,password:hashPassword})
       return res.status(201).json({
        status:201,
        message:"user register successfully",
        data:addUser
    })

    }catch(error){
            catchError(res,error)
    }
}

// export const userLogin = async(req,res)=>{
//     const { email, number } = req.body
// if (!email && !number) {
//   return res.status(400).json({ error: 'email or no...' });
// }

//    try{
//     // const checkUser = await User.findOne({where:{email:req.body.email}})
//     const checkUser = await User.findOne({
//         where: {
//           [Sequelize.Op.or]: [
//             { email: req.body.email },
//             ...(req.body.number ? [{ number: req.body.number }] : [])
//           ]
//         }
//       });
      

//     if(!checkUser){
//       if(checkUser.email == req.body.email){
//         return res.status(400).json({
//             status:400,
//             message:"this email is not found",
//             data:[]
//         })
//       }else{
//         return res.status(400).json({
//             status:400,
//             message:"this number  is not found",
//             data:[]
//         })
//       }
//     }
//     let userDataPassword = checkUser.password
//     let userPassword = req.body.password
//     let comparePassword =  await bcryptjs.compare(userPassword,userDataPassword)
//     if(comparePassword){
//         return res.status(200).json({
//             status:200,
//             message:"user login successfully",
//             data:checkUser
//         })

//     }else{
//         return res.status(400).json({
//             status:400,
//             message:"password is not match",
//             data:[]
//         })
//     }
         
//    }catch(error){
//     catchError(res,error)
//    }
// }

export const getAllUser = async(req,res)=>{
    try{
        const getUser =  await User.findAll()
        return res.status(200).json({
            status:200,
            message:"get all user successfully",
            data:getUser
        })

    }catch(error){
        catchError(res,error)
    }
}

export const getOneUser = async(req,res)=>{
    try{
        let userID = req.params.id
        const getUser =  await User.findByPk(userID)
        return res.status(200).json({
            status:200,
            message:"get user successfully",
            data:getUser
        })

    }catch(error){
        catchError(res,error)
    }
}

export const updateOneUser = async(req,res)=>{
    try{
        let userID = req.params.id
        const updateUser =  await User.update({name:req.body.name},{
            where:{id:userID}
        })
        return res.status(200).json({
            status:200,
            message:"update  user  data successfully",
            data:updateUser
        })

    }catch(error){
        catchError(res,error)
    }
}

export const deleteOneUser = async(req,res)=>{
    try{
        let userID = req.params.id
        const deleteUser =  await User.destroy({where:{id:userID}})
        return res.status(200).json({
            status:200,
            message:"delete  user  data successfully",
            data:[]
        })

    }catch(error){
        catchError(res,error)
    }
}