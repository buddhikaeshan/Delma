const { DataTypes } = require("sequelize");
const sequelize = require("../index");
const Room = require("./Room");
const Booking = require("./Booking");

const RoomsHasBookings = sequelize.define(
  "RoomsHasBookings",
  {
    rooms_roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Room,
        key: "roomId",
      },
    },
    bookings_bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Booking,
        key: "bookingId",
      },
    },
    bookings_customers_customersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "rooms_has_bookings",
    timestamps: false,
  }
);

module.exports = RoomsHasBookings;
