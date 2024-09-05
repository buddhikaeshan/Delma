const Customer = require("../models/Customers.js");

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const { cusFullName, cusNIC, cusTP, cusEmail, cusAddress } = req.body;

    // Check if all required fields are provided
    if (!cusFullName || !cusNIC || !cusTP || !cusEmail || !cusAddress) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingCustomer = await Customer.findOne({
      where: { cusEmail },
    });

    if (existingCustomer) {
      return res
        .status(400)
        .json({ error: "A customer with this email already exists." });
    }

    const newCustomer = await Customer.create({
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        error: "Validation error: Please check the provided data.",
      });
    }
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        error:
          "Duplicate field value: A customer with this email or NIC already exists.",
      });
    }
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
};

// Get all users
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await Customer.findByPk(id);
    if (!customers) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { cusFullName, cusNIC, cusTP, cusEmail, cusAddress } = req.body;

    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }

    await customer.update({
      cusFullName,
      cusNIC,
      cusTP,
      cusEmail,
      cusAddress,
    });

    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.destroy();
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
