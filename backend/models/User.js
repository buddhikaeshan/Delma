const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    userType: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userTP: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    userNIC: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    userAddress: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    userStatus: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
