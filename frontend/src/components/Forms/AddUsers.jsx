import React, { useState } from "react";

function AddUsers({ onClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    userType: "",
    userPassword: "",
    userTP: "",
    userNIC: "",
    userEmail: "",
    userAddress: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error);
      } else {
        setSuccessMessage(result.message);
        setFormData({
          userName: "",
          userType: "",
          userPassword: "",
          userTP: "",
          userNIC: "",
          userEmail: "",
          userAddress: "",
        });
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userName">Full Name</h5>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control"
              placeholder="Full Name"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userType">User Type</h5>
            <select
              id="userType"
              name="userType"
              className="form-control"
              value={formData.userType}
              onChange={handleChange}
            >
              <option>Select User Type</option>
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="form-group">
          <h5 htmlFor="userPassword">Password</h5>
          <input
            type="text"
            id="userPassword"
            name="userPassword"
            className="form-control"
            placeholder="Enter Password"
            value={formData.userPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userTP">Mobile Number</h5>
            <input
              type="text"
              id="userTP"
              name="userTP"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.userTP}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userNIC">NIC</h5>
            <input
              type="text"
              id="userNIC"
              name="userNIC"
              className="form-control"
              placeholder="NIC"
              value={formData.userNIC}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userEmail">Email</h5>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="form-control"
              placeholder="Email"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="userAddress">Address</h5>
            <textarea
              id="userAddress"
              name="userAddress"
              className="form-control"
              rows="1"
              placeholder="Address"
              value={formData.userAddress}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default AddUsers;
