import React from 'react'

function AddPackages() {
    return (
        <form className="p-3">
            <div className="row mb-3">
                <div className="form-group">
                    <h5 htmlFor="name">Name</h5>
                    <select id="name" className="form-control">
                        <option>Select Package</option>
                        <option>Room Only</option>
                        <option>Bed And Breakfast</option>
                        <option>Half Board</option>
                        <option>Full Board</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="form-group ">
                    <h5 htmlFor="roomType">Room Type</h5>
                    <select id="roomType" className="form-control">
                        <option>Select Room Type</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Triple</option>
                    </select>
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
                    />
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

export default AddPackages