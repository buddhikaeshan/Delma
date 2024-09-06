import { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Table from '../../components/Table'
import BookingForm from '../../components/Forms/BookingForm';
import config from '../../config';

function Bookings() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const columns = ["ID", "Name", "Mobile Number", "NIC", "Check In", "Check Out", "Persons", "Pay Method", "Pay Status"]
    const btnName = "Booking Now";

    useEffect(() => {
        fetchBooking();
    }, []);

    const fetchBooking = async () => {
        try {
            const response = await fetch(`${config.BASE_URL}/booking`);
            if (!response.ok) {
                throw new Error('Failed to fetch Booking');
            }
            const booking = await response.json();
            const formattedData = booking.map(booking => [
                booking.customers_customersId,
                booking.cusFullName,
                booking.cusTP,
                booking.cusNIC,
                booking.cusCheckIn,
                booking.cusCheckOut,
                booking.numberOfPersons,
                booking.payMethod,
                booking.payStatus,
            ]);
            setData(formattedData);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };


    const handleEdit = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };
    const handleDelete = (rowIndex) => {
        console.log(`Deleting row ${rowIndex}`);
    };
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (event) => {
        event.preventDefault();
        console.log("Booking information saved");
        setModalOpen(false);
        fetchBooking();
    };
    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Bookings</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <Table
                        data={data}
                        columns={columns}
                        btnName={btnName}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onAdd={handleOpenModal}
                    />
                )}
                {isModalOpen && (
                    <div
                        className="modal d-block"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header bg-success text-white">
                                    <h5 className="modal-title">Booking Details</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={handleCloseModal}
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            fontSize: "1.5rem",
                                            background: "none",
                                            border: "none",
                                            color: "white",
                                            outline: "none",
                                            cursor: "pointer",
                                        }}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <BookingForm onClose={handleCloseModal} onSave={handleSave} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Bookings