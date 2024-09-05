const Booking = require("../models/Booking");
const Customer = require("../models/Customers");
const { validationResult } = require("express-validator");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const {
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
      cusCheckIn,
      cusCheckOut,
      numberOfPersons,
      payMethod,
      payStatus,
    } = req.body;

    if (!cusFullName || !cusTP || !cusNIC || !cusEmail || !cusAddress) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if a user with the same NIC already exists in the Customer table
    const existingCustomer = await Customer.findOne({ where: { cusNIC } });
    if (existingCustomer) {
      return res
        .status(400)
        .json({ error: "A user with this NIC already exists." });
    }

    const newBooking = await Booking.create({
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
      cusCheckIn,
      cusCheckOut,
      numberOfPersons,
      payMethod,
      payStatus,
    });

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Detailed validation error:", error);
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ error: "Validation error: Please check the provided data." });
    }

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        error:
          "Duplicate field value: A user with this email or NIC already exists.",
      });
    }

    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update Booking (Booking details only)
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
      cusCheckIn,
      cusCheckOut,
      numberOfPersons,
      payMethod,
      payStatus,
    } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Update only the booking-specific fields
    await booking.update({
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
      cusCheckIn,
      cusCheckOut,
      numberOfPersons,
      payMethod,
      payStatus,
    });

    return res.status(200).json(booking);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete a Booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    await booking.destroy();
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
