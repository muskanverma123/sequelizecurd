import { sequelize } from "../config/ConfigDB.js";
import { Sequelize ,DataTypes } from "sequelize";

const User = sequelize.define(
    'User',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        number:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:"User",
        timestamps:false

    },  
)

User.associate = function (models) {
    User.hasOne(models.Profile, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE',  
    });

    User.hasMany(models.Post, {
        foreignKey: 'userId', 
        onDelete: 'CASCADE',  
    });


    // User.belongsToMany(models.Project, {
    //     through: 'UserProjects', 
    //     foreignKey: 'userId',     
    //     otherKey: 'projectId'  
    // });

    User.belongsToMany(models.Project, {
        through: "UserProjects", 
        foreignKey: "userId",     
        otherKey: "projectId",    
      });
}                                                                                               

export default User