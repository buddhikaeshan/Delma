import React, { useState } from "react";
import config from "../../config";

function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        nic: "",
        checkIn: "",
        checkOut: "",
        persons: "",
        payMethod: "",
        payStatus: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[a-zA-Z\s]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        const nicRegex = /^[0-9]{9}[vVxX]$/;
        const numberRegex = /^[1-9][0-9]*$/;

        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required.";
        } else if (!nameRegex.test(formData.fullName)) {
            newErrors.fullName = "Full Name must contain only letters and spaces.";
        }

        if (!formData.mobileNumber) {
            newErrors.mobileNumber = "Mobile Number is required.";
        } else if (!mobileRegex.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
        }

        if (!formData.nic) {
            newErrors.nic = "NIC is required.";
        } else if (!nicRegex.test(formData.nic)) {
            newErrors.nic = "Invalid NIC format.";
        }
        if (!formData.checkIn) {
            newErrors.checkIn = "Check In date is required.";
        }

        if (!formData.checkOut) {
            newErrors.checkOut = "Check Out date is required.";
        } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
            newErrors.checkOut = "Check Out must be after Check In.";
        }

        if (!formData.persons) {
            newErrors.persons = "Number of persons is required.";
        } else if (!numberRegex.test(formData.persons)) {
            newErrors.persons = "Persons must be a positive number.";
        }

        if (!formData.payMethod) {
            newErrors.payMethod = "Pay Method is required.";
        }

        if (!formData.payStatus) {
            newErrors.payStatus = "Pay Status is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await fetch(`${config.BASE_URL}/booking`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrors({ form: data.error || "Failed to submit the form." });
            } else {
                setErrors({});
                console.log("Booking submitted successfully!");
                // Clear the form after successful submission
                setFormData({
                    fullName: "",
                    mobileNumber: "",
                    nic: "",
                    checkIn: "",
                    checkOut: "",
                    persons: "",
                    payMethod: "",
                    payStatus: "",
                });
            }
        } catch (err) {
            setErrors({ form: "Failed to submit form" });
        }
    };

    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="fullName">Full Name</h5>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-control"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="mobileNumber">Mobile Number</h5>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                    {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="nic">NIC</h5>
                    <input
                        type="text"
                        id="nic"
                        name="nic"
                        className="form-control"
                        placeholder="NIC"
                        value={formData.nic}
                        onChange={handleChange}
                    />
                    {errors.nic && <small className="text-danger">{errors.nic}</small>}
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="checkIn">Check In</h5>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            className="form-control"
                            value={formData.checkIn}
                            onChange={handleChange}
                        />
                        {errors.checkIn && <small className="text-danger">{errors.checkIn}</small>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="checkOut">Check Out</h5>
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            className="form-control"
                            value={formData.checkOut}
                            onChange={handleChange}
                        />
                        {errors.checkOut && <small className="text-danger">{errors.checkOut}</small>}
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="persons">Persons</h5>
                    <input
                        type="text"
                        id="persons"
                        name="persons"
                        className="form-control"
                        placeholder="Persons"
                        value={formData.persons}
                        onChange={handleChange}
                    />
                    {errors.persons && <small className="text-danger">{errors.persons}</small>}
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="payMethod">Pay Method</h5>
                        <input
                            type="text"
                            id="payMethod"
                            name="payMethod"
                            className="form-control"
                            placeholder="Pay Method"
                            value={formData.payMethod}
                            onChange={handleChange}
                        />
                        {errors.payMethod && <small className="text-danger">{errors.payMethod}</small>}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="payStatus">Pay Status</h5>
                        <input
                            type="text"
                            id="payStatus"
                            name="payStatus"
                            className="form-control"
                            placeholder="Pay Status"
                            value={formData.payStatus}
                            onChange={handleChange}
                        />
                        {errors.payStatus && <small className="text-danger">{errors.payStatus}</small>}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn btn-secondary mr-2">
                    Close
                </button>
                <button type="submit" className="btn btn-success">
                    Save Changes
                </button>
            </div>

            {errors.form && <div className="text-danger mt-2">{errors.form}</div>}
        </form>
    );
}

export default BookingForm;