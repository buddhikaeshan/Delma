const { DataTypes } = require("sequelize");
const sequelize = require("../index"); 


const Room = sequelize.define(
  "Room",
  {
    roomId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roomNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomCapacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "rooms",
  }
);

module.exports = Room; 
