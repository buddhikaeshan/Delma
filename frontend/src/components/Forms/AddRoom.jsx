import React, { useState } from 'react';
import axios from 'axios';

function AddRoom({ onClose, onSave }) {
    // State to hold form data
    const [formData, setFormData] = useState({
        roomNumber: '',
        roomType: '',
        price: '',
        roomCapacity: '',
        bedType: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to backend API
            const response = await axios.post('http://localhost:5000/rooms', formData);
            console.log('Room added successfully:', response.data);
            onSave();  // Callback to parent if needed
        } catch (error) {
            console.error('Error adding room:', error);
        }
    };

    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="roomNumber">Room Number</h5>
                        <input
                            type="text"
                            id="roomNumber"
                            name="roomNumber"
                            className="form-control"
                            placeholder="Room Number"
                            value={formData.roomNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="roomType">Room Type</h5>
                        <input
                            type="text"
                            id="roomType"
                            name="roomType"
                            className="form-control"
                            placeholder="Room Type"
                            value={formData.roomType}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="price">Price Per Night</h5>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="form-control"
                            placeholder="Price Per Night"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="roomCapacity">Room Capacity</h5>
                        <input
                            type="text"
                            id="roomCapacity"
                            name="roomCapacity"
                            className="form-control"
                            placeholder="Room Capacity"
                            value={formData.roomCapacity}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="bedType">Bed Type</h5>
                        <input
                            type="text"
                            id="bedType"
                            name="bedType"
                            className="form-control"
                            placeholder="Bed Type"
                            value={formData.bedType}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    onClick={onClose}
                >
                    Close
                </button>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={onSave}
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}

export default AddRoom;
