export function catchError(res,error){
    console.log(error)
    return res.status(500).json({
        status:500,
        message:"internal server error",
        data:[]
    })
}