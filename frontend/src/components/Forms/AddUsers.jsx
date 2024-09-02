import React from 'react'

function AddUsers() {
    return (
        <form className="p-3">
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="fullName">Full Name</h5>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="form-control"
                            placeholder="Full Name"
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="userType">User Type</h5>
                        <select id="userType" className="form-control">
                            <option>Select User Type</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="mobileNumber">Mobile Number</h5>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            className="form-control"
                            placeholder="Mobile Number"
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="nic">NIC</h5>
                        <input
                            type="text"
                            id="nic"
                            name="nic"
                            className="form-control"
                            placeholder="NIC"
                        />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="email">Email</h5>
                        <input
                            type="Email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="address">Address</h5>
                        <textarea
                            id="address"
                            className="form-control"
                            rows="1"
                            placeholder="Address"
                        ></textarea>
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

export default AddUsers