import { Sequelize } from "sequelize";
const sequelize = new Sequelize('test_three','root','root',{
    host : 'localhost',
    dialect:'mysql',
    logging:false
})
const ConnectDB = async(req,res)=>{
    try{
        console.log("database is connected successfully")
    }catch(error){
        console.log("database is not connected")
    }
}
export{sequelize,ConnectDB}