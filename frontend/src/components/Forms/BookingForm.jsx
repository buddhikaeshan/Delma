function BookingForm({onSave,onClose}) {
    return (
        <form className="p-3" >
            <div className="row mb-3">
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

            <div className="row mb-3">
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

            <div className="row mb-3">
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

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <h5 htmlFor="checkIn">Check In</h5>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            className="form-control"
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
                        />
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
                    />
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
                        />
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
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
                    Close
                </button>
                <button type="submit" className="btn btn-success" onClick={onSave}>
                    Save Changes
                </button>
            </div>
        </form>
    );
}

export default BookingForm;