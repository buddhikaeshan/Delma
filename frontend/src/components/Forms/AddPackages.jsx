import React, { useState, useEffect } from 'react';
import config from '../../config';

function AddPackages({ onClose, onSave, packages }) {
    const [formData, setFormData] = useState({
        packageName: '',
        bedType: '',
        packagePrice: '',
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (packages) {
            setFormData({
                packageName: packages.packageName || '',
                bedType: packages.bedType || '',
                packagePrice: packages.packagePrice || '',
            });
        }
    }, [packages]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        setError(null);

        // Basic input validation
        if (!formData.packageName || !formData.bedType || !formData.packagePrice) {
            setError("All fields are required.");
            return;
        }

        if (isNaN(formData.packagePrice)) {
            setError("Price must be a valid number.");
            return;
        }

        try {
            const method = packages ? 'PUT' : 'POST';
            const url = packages
                ? `${config.BASE_URL}/packages/${packages.PackageId}` 
                : `${config.BASE_URL}/packages`;

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    packageName: formData.packageName,
                    bedType: formData.bedType,
                    packagePrice: parseFloat(formData.packagePrice),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save package');
            }

            const data = await response.json();
            console.log('Package saved successfully:', data);
            onSave(data);
            onClose();
        } catch (error) {
            setError(error.message || "An error occurred while saving the package.");
            console.error('Error:', error);
        }
    };

    return (
        <form className="p-3" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="packageName">Package Name</h5>
                    <input
                        type="text"
                        id="packageName"
                        name="packageName"
                        className="form-control"
                        placeholder="Package Name"
                        value={formData.packageName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="bedType">Room Type</h5>
                    <input
                        type="text"
                        id="bedType"
                        name="bedType"
                        className="form-control"
                        placeholder="Room Type"
                        value={formData.bedType}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="packagePrice">Price</h5>
                    <input
                        type="number"
                        id="packagePrice"
                        name="packagePrice"
                        className="form-control"
                        placeholder="Price"
                        value={formData.packagePrice}
                        onChange={handleChange}
                        required
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
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}

export default AddPackages;
