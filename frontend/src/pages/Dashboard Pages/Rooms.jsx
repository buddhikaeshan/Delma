import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table';
import AddRoom from '../../components/Forms/AddRoom';
import config from '../../config';

function Rooms() {
    const columns = ["Room ID", "Room Number", "Room Type", "Bed Type", "Room Capacity", "Price Per Night", "Status"];
    const [rooms, setRooms] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {

        fetchRooms();

    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/rooms`);
            setRooms(response.data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };
    const handleStatusChange = async (roomId, newStatus) => {
        try {
            const response = await axios.put(`${config.API_URL}/rooms/${roomId}`, { status: newStatus });
            console.log('Room status updated:', response.data);
            setRooms(prevRooms =>
                prevRooms.map(room =>
                    room.id === roomId ? { ...room, status: newStatus } : room
                )
            );
        } catch (error) {
            console.error('Error updating room status:', error);
        }
    };

    const handleDelete = async (rowIndex) => {
        const roomToDelete = rooms[rowIndex];

        if (!roomToDelete) {
            alert("Room not found.");
            return;
        }

        const confirmDelete = window.confirm(
            `Are you sure you want to delete the Room "${roomToDelete.roomNumber}"?`
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(`${config.BASE_URL}/rooms/${roomToDelete.roomId}`);
            setRooms((prev) => prev.filter((_, index) => index !== rowIndex));
            alert("Room deleted successfully.");
        } catch (error) {
            console.error("Error deleting Room:", error);
            alert("Failed to delete the Room. Please try again.");
        }
    };

    const handleEdit = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (event) => {
        event.preventDefault();
        console.log("Room information saved");
        setModalOpen(false);
        fetchRooms();
    };

    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Rooms</h2>
                <Table
                    data={rooms.map(room => [
                        room.roomId,
                        room.roomNumber,
                        room.roomType,
                        room.bedType,
                        room.roomCapacity,
                        room.price,
                        <select
                            id="status"
                            className="form-control"
                            value={room.status}
                            onChange={(e) => handleStatusChange(room.id, e.target.value)}
                        >
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                            <option value="Cleaning">Cleaning</option>
                        </select>
                    ])}
                    columns={columns}
                    btnName="Add New Room"
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAdd={handleOpenModal}
                />
                {isModalOpen && (
                    <div
                        className="modal d-block"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header bg-success text-white">
                                    <h5 className="modal-title">Add New Room</h5>
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
                                    <AddRoom onClose={handleCloseModal} onSave={handleSave} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Rooms;
