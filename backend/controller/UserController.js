const User = require("../models/User");

// Create a new user
const createUser = async (req, res) => {
  try {
    const {
      userName,
      userType,
      userPassword,
      userTP,
      userNIC,
      userEmail,
      userAddress,
      userStatus,
    } = req.body;

    if (
      !userName ||
      !userType ||
      !userPassword ||
      !userTP ||
      !userNIC ||
      !userEmail ||
      !userAddress
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newUser = await User.create({
      userName,
      userType,
      userPassword, // Use hashedPassword here
      userTP,
      userNIC,
      userEmail,
      userAddress,
      userStatus,
    });

    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ error: "Validation error: Please check the provided data." });
    }

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        error:
          "Duplicate field value: A user with this email or username already exists.",
      });
    }

    res.status(400).json({ error: `An error occurred: ${error.message}` });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userName,
      userType,
      userPassword,
      userTP,
      userNIC,
      userEmail,
      userAddress,
      userStatus,
    } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({
      userName,
      userType,
      userPassword, // Use hashedPassword here
      userTP,
      userNIC,
      userEmail,
      userAddress,
      userStatus,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
