import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table';
import BookingForm from '../../components/Forms/BookingForm';
import config from '../../config';

function Bookings() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const columns = [
        'ID',
        'Name',
        'Mobile Number',
        'Email',
        'NIC',
        'Check In',
        'Check Out',
        'Persons',
        'Room Type',
        'Pay Method',
        'Pay Status',
        'Status',
    ];
    const btnName = 'Booking Now';

    useEffect(() => {
        fetchBooking();
    }, []);

    const fetchBooking = async () => {
        try {
            const response = await fetch(`${config.BASE_URL}/booking`);
            if (!response.ok) {
                throw new Error('Failed to fetch bookings');
            }
            const bookings = await response.json();
            const formattedData = bookings.map((booking) => [
                booking.bookingId,
                booking.cusFullName,
                booking.cusTP,
                booking.cusEmail,
                booking.cusNIC,
                booking.cusCheckIn,
                booking.cusCheckOut,
                booking.numberOfPersons,
                booking.roomType,
                booking.payMethod,
                <select
                    className="form-control"
                    key={`payStatus-${booking.bookingId}`}
                    value={booking.payStatus}
                    onChange={(e) =>
                        handleStatusChange(booking.bookingId, e.target.value)
                    }
                >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Pending">Pending</option>
                </select>,
                booking.status,
            ]);
            setData(formattedData);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`${config.BASE_URL}/booking/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ payStatus: newStatus }),
            });

            if (!response.ok) {
                throw new Error('Failed to update status');
            }

            setData((prevData) =>
                prevData.map((item) =>
                    item[0] === id
                        ? [
                            ...item.slice(0, 9),
                            <select
                                key={`payStatus-${id}`}
                                value={newStatus}
                                onChange={(e) => handleStatusChange(id, e.target.value)}
                            >
                                <option value="Paid">Paid</option>
                                <option value="Unpaid">Unpaid</option>
                                <option value="Pending">Pending</option>
                            </select>,
                            item[10] // Keep the status field intact
                        ]
                        : item
                )
            );
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleEdit = (rowIndex) => {
        const selectedBookingData = data[rowIndex];
        setSelectedBooking({
            bookingId: selectedBookingData[0],
            cusFullName: selectedBookingData[1],
            cusTP: selectedBookingData[2],
            cusEmail: selectedBookingData[3],
            cusNIC: selectedBookingData[4],
            cusCheckIn: selectedBookingData[5],
            cusCheckOut: selectedBookingData[6],
            numberOfPersons: selectedBookingData[7],
            roomType: selectedBookingData[8],
            payMethod: selectedBookingData[9],
        });
        setModalOpen(true);
    };

    const handleDelete = async (rowIndex) => {
        try {
            const bookingId = data[rowIndex][0];

            const response = await fetch(`${config.BASE_URL}/booking/${bookingId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete booking: ${errorText}`);
            }

            setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
        } catch (err) {
            console.error('Error deleting booking:', err);
            setError(err.message);
        }
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => {
        setSelectedBooking(null);
        setModalOpen(false);
    };

    const handleSave = (event) => {
        event.preventDefault();
        console.log('Booking information saved');
        setModalOpen(false);
        fetchBooking(); // Refetch bookings after saving
    };

    return (
        <div className="d-flex">
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
                    <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header bg-success text-white">
                                    <h5 className="modal-title">Booking Details</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={handleCloseModal}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            fontSize: '1.5rem',
                                            background: 'none',
                                            border: 'none',
                                            color: 'white',
                                            outline: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <BookingForm onClose={handleCloseModal} onSave={handleSave} booking={selectedBooking} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bookings;
