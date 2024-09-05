import { useState } from 'react';
import axios from 'axios';
import config from '../../config';


function AddPackages({ onClose, onSave }) {
    const [packageName, setPackageName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Basic input validation
        if (!packageName || !roomType || !price) {
            alert("Please fill out all fields.");
            return;
        }

        if (isNaN(price)) {
            alert("Price must be a valid number.");
            return;
        }

        try {
            const response = await axios.post(`${config.BASE_URL}/package`, {
                packageName,
                bedType: roomType,
                packagePrice: parseFloat(price),
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
            }
        }
    };


    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="name">Package Name</h5>
                    <input
                        type="text"
                        id="packageName"
                        name="packageName"
                        className="form-control"
                        placeholder="Package Name"
                        value={packageName}
                        onChange={(e) => setPackageName(e.target.value)}
                    />

                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="roomType">Room Type</h5>
                    <input
                        type="text"
                        id="roomType"
                        name="roomType"
                        className="form-control"
                        placeholder="Room Name"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="price">Price</h5>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="form-control"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
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

export default AddPackages;
