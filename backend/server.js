const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./Index");
const UserController = require("./controller/UserController");

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
