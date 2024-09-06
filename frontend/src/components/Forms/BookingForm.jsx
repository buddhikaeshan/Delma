import React, { useState, useEffect } from 'react';
import config from '../../config';

function BookingForm({ onSave, onClose, bookingData }) {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        nic: '',
        email: '',
        checkIn: '',
        checkOut: '',
        persons: '',
        roomType: '',
        payMethod: '',
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bookingData) {
            setFormData({
                fullName: bookingData.fullName || '',
                mobileNumber: bookingData.mobileNumber || '',
                nic: bookingData.nic || '',
                email: bookingData.email || '',
                checkIn: bookingData.checkIn || '',
                checkOut: bookingData.checkOut || '',
                persons: bookingData.persons || '',
                roomType: bookingData.roomType || '',
                payMethod: bookingData.payMethod || '',
            });
        }
    }, [bookingData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!formData.fullName || !formData.mobileNumber || !formData.email || !formData.nic || !formData.checkIn || !formData.checkOut || !formData.persons || !formData.roomType || !formData.payMethod) {
            setError("All fields are required.");
            return;
        }

        try {
            const method = bookingData ? 'PUT' : 'POST';
            const url = bookingData
                ? `${config.BASE_URL}/booking/${bookingData.id}`
                : `${config.BASE_URL}/booking`;

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cusFullName: formData.fullName,
                    cusNIC: formData.nic,
                    cusTP: formData.mobileNumber,
                    cusEmail: formData.email,
                    cusCheckIn: formData.checkIn,
                    cusCheckOut: formData.checkOut,
                    numberOfPersons: formData.persons,
                    roomType: formData.roomType,
                    payMethod: formData.payMethod,
                }),
            });

            const contentType = response.headers.get('Content-Type');
            if (!response.ok || !contentType || !contentType.includes('application/json')) {
                const text = await response.text(); // Get response as text
                throw new Error(`Unexpected response: ${text}`);
            }

            const data = await response.json();
            onSave(data);
            onClose();
        } catch (error) {
            setError(error.message || "An error occurred while saving the booking.");
            console.error('Error:', error);
        }
    };

    return (
        <form className="p-3" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
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
                        required
                    />
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
                        required
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-md-6'>
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
                            required
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <h5 htmlFor="email">Email</h5>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                            required
                        />
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
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-md-6'>
                    <div className="form-group">
                        <h5 htmlFor="persons">Persons</h5>
                        <input
                            type="number"
                            id="persons"
                            name="persons"
                            className="form-control"
                            placeholder="Persons"
                            value={formData.persons}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <h5 htmlFor="roomType">Room Type</h5>
                        <select
                            className="form-control"
                            value={formData.roomType}
                            onChange={handleChange}
                            required
                        >
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                        </select>,
                    </div>
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
                            required
                        />
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

export default BookingForm;
