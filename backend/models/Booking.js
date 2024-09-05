const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index"); // Adjust the path as needed

const Booking = sequelize.define(
  "Booking",
  {
    cusId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cusFullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusNIC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusNIC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusCheckIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusCheckOut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfPersons: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "booking",
    timestamps: false,
  }
);

module.exports = Booking;
