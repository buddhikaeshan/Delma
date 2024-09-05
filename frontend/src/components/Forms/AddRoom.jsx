import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../config'

function AddRoom({ onClose, onSave }) {
    const [roomNumber, setroomNumber] = useState('');
    const [roomType, setRoomType] = useState('');
    const [bedType, setBedType] = useState('');
    const [roomCapacity, setroomCapacity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStstus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic input validation
        if (!roomNumber || !roomType || !bedType || !roomCapacity || !price) {
            alert("Please fill out all fields.");
            return;
        }

        if (isNaN(price)) {
            alert("Price must be a valid number.");
            return;
        }

        try {
            const response = await axios.post(`${config.BASE_URL}/package`, {
                roomNumber,
                roomType: roomType,
                bedType: bedType,
                roomCapacity: roomCapacity,
                price: parseFloat(price),
                status: status,
            });

            console.log('Response:', response.data);
            alert('Package saved successfully!');
            onSave();
            onClose();
        } catch (error) {
            if (error.response) {
                console.error('Error Response Data:', error.response.data);
                console.error('Error Response Status:', error.response.status);
                console.error('Error Response Headers:', error.response.headers);
            } else if (error.request) {
                // Error if the request was made but no response received
                console.error('Error Request:', error.request);
                alert('No response from the server. Please check your network.');
            } else {
                // Error setting up the request
                console.error('Error Message:', error.message);
                alert('Error: Failed to save the package. Please try again.');
            }
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
                            value={roomNumber}
                            onChange={(e) => setroomNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="roomType">Room Type</h5>
                        <select id="roomType" className="form-control">
                            <option>Select Room Type</option>
                            <option>Single</option>
                            <option>Double</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="pricePerNight">Price Per Night</h5>
                        <input
                            type="text"
                            id="pricePerNight"
                            name="pricePerNight"
                            className="form-control"
                            placeholder="Price Per Night"
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
                        />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="bedType">Bed Type</h5>
                        <select id="bedType" className="form-control">
                            <option>Select Bed Type</option>
                            <option>Single Bed</option>
                            <option>Double Bed</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button
                    type="button"
                    className="btn btn-secondary mr-2"
                >
                    Close
                </button>
                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Save Changes
                </button>
            </div>
        </form>
    )
}

export default AddRoom