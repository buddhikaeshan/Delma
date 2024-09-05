const { DataTypes } = require("sequelize");
const sequelize = require("../index");
const Customer = require("./Customers");

const Booking = sequelize.define(
  "Booking",
  {
    bookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cusCheckIn: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    cusCheckOut: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    numberOfPersons: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    payMethod: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    payStatus: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    customers_customersId: {
      // Verify this field name
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure this matches your DB schema
      references: {
        model: Customer,
        key: "customersId",
      },
    },
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

module.exports = Booking;
