import React from 'react'

function AddRoom() {
    return (
        <form className="p-3">
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