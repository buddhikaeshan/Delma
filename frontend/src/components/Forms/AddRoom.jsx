import { useState } from 'react'
import axios from 'axios'
import config from '../../config'

function AddRoom({ onClose, onSave }) {
    const [roomNumber, setRoomNumber] = useState('');
    const [roomType, setRoomType] = useState('');
    const [bedType, setBedType] = useState('');
    const [roomCapacity, setRoomCapacity] = useState('');
    const [price, setPrice] = useState('');

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
                            onChange={(e) => setRoomNumber(e.target.value)}
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
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                        />
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
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
                            value={roomCapacity}
                            onChange={(e) => setRoomCapacity(e.target.value)}
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
                            value={bedType}
                            onChange={(e) => setBedType(e.target.value)}
                        />
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