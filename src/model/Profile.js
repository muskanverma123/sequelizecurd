import { sequelize } from "../config/ConfigDB.js";
import { Sequelize, DataTypes } from "sequelize";

const Profile = sequelize.define(
  'Profile',
  {
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Profile", 
    timestamps: false,    
  }
);

Profile.associate = function (models) {
  Profile.belongsTo(models.User, {
    foreignKey: 'userId',  
    onDelete: 'CASCADE', 
  });
};

export default Profile;
