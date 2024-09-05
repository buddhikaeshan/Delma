const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./index");
const UserController = require("./controller/UserController");
const RoomController = require("./controller/RoomController");
const CustomerController = require("./controller/CustomersController");
const PackageController = require("./controller/PackageController");
const BookingController = require("./controller/BookingController");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User Routes
app.post("/users", UserController.createUser);
app.get("/users", UserController.getAllUsers);
app.get("/users/:id", UserController.getUserById);
app.put("/users/:id", UserController.updateUser);
app.delete("/users/:id", UserController.deleteUser);
app.post("/loginUser", UserController.loginUser);

// Room Routes
app.post("/rooms", RoomController.createRoom);
app.get("/rooms", RoomController.getAllRooms);
app.get("/rooms/:id", RoomController.getRoomById);
app.put("/rooms/:id", RoomController.updateRoom);
app.delete("/rooms/:id", RoomController.deleteRoom);

// Room Routes
app.post("/customer", CustomerController.createCustomer);
app.get("/customer", CustomerController.getAllCustomers);
app.get("/customer/:id", CustomerController.getCustomerById);
app.put("/customer/:id", CustomerController.updateCustomer);
app.delete("/customer/:id", CustomerController.deleteCustomer);

//Package Routes
app.post("/package", PackageController.createPackage);
app.get("/package", PackageController.getAllPackages);
app.get("/package/:id", PackageController.getPackageById);
app.put("/package/:id", PackageController.updatePackage);
app.delete("/package/:id", PackageController.deletePackage);

//Booking Routes
app.post("/booking", BookingController.createBooking);
app.get("/booking", BookingController.getAllBookings);
app.get("/booking/:id", BookingController.getBookingById);
app.put("/booking/:id", BookingController.updateBooking);
app.delete("/booking/:id", BookingController.deleteBooking);

// Sync the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
