const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const Customers = sequelize.define(
  "Customers",
  {
    customersId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cusFullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusNIC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cusTP: {
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
  },
  {
    timestamps: false,
    tableName: "customers",
  }
);
module.exports = Customers;
