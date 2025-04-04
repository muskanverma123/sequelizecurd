import{catchError} from "../comman/commonFunction.js"
import Joi from "joi"
const dataValidation = async(req,res,next)=>{
    try{
      const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        number:Joi.number().integer().required(),
        password:Joi.string().required(),
      })
      const{error} = schema.validate(req.body)
      if(error){
        return res.status(400).json({
            status:400,
            message:"invalid output",
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