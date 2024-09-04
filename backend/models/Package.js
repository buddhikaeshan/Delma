const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const Package = sequelize.define(
  "Package",
  {
    packageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    packageName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    packagePrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "packages",
  }
);

module.exports = Package;
