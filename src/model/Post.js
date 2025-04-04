import { sequelize } from "../config/ConfigDB.js";
import { Sequelize, DataTypes } from "sequelize";

const Post = sequelize.define(
  'Post',
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',  
          key: 'id'      
        },
      }
  },
  {
    tableName: "Post", 
    timestamps: false,    
  }
);

Post.associate = function (models) {
  Post.belongsTo(models.User, {
    foreignKey: 'userId',  
    onDelete: 'CASCADE', 
  });
};

export default Post;
