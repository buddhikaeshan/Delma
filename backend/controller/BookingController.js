const Booking = require("../models/Booking");
const Customer = require("../models/Customers");
const Room = require("../models/Room");
const RoomsHasBookings = require("../models/RoomsHasBookings");
const CustomerController = require("./CustomersController");

// Create Booking
const createBooking = async (req, res) => {
  try {
    // Destructure the fields from the request body
    const { cusCheckIn, cusCheckOut, numberOfPersons, payMethod, payStatus, customers_customersId } = req.body;

    // Check if the customer exists
    const customer = await Customer.findByPk(customers_customersId);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Create the booking associated with the customer
    const newBooking = await Booking.create({
      cusCheckIn,
      cusCheckOut,
      numberOfPersons,
      payMethod,
      payStatus,
      customers_customersId
    });

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: Customer, as: "Customer" },
        {
          model: Room,
          as: "Rooms",
          through: { model: RoomsHasBookings, attributes: [] },
        },
      ],
    });
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id, {
      include: [
        { model: Customer, as: "Customer" },
        {
          model: Room,
          as: "Rooms",
          through: { model: RoomsHasBookings, attributes: [] },
        },
      ],
    });
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
    const { cusCheckIn, cusCheckOut, numberOfPersons, payMethod, payStatus } =
      req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Update only the booking-specific fields
    await booking.update({
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
