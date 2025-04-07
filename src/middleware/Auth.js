import { catchError } from "../commonfunction/comFunction.js"
import Joi from "joi"
const dataValidation = async(req,res,next)=>{
    try{
        let schema = Joi.object({
            name:Joi.string().min(3).max(50).required(),
            number:Joi.number().integer().required(),
            email:Joi.string().email().required(),
            password:Joi.string().required()
        })
        const{error} = schema.validate(req.body)
         if(error){
            return res.status(400).json({
                status:400,
                message:"invaild data",
                data:[]
            })
         }else{
            next()
         }
    }catch(error){
        catchError(res,error)
    }
}
export default dataValidation