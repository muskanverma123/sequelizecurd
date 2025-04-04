import { sequelize } from "../config/ConfigDB.js";
import { Sequelize, DataTypes } from "sequelize";

const Project = sequelize.define(
  'Project',
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'active'  
      }
  },
  {
    tableName: "Project", 
    timestamps: false,    
  }
);

Project.associate = (models) => {
    Project.belongsToMany(models.User, {
      through: 'UserProjects', 
      foreignKey: 'projectId',  
      otherKey: 'userId'    
    });
  };

export default Project;
