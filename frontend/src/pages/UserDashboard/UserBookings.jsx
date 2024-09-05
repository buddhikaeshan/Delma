import {useState} from 'react'
import SidebarUser from '../../components/SidebarUser/SidebarUser';
import Table from '../../components/Table'
import BookingForm from '../../components/Forms/BookingForm';

function Bookings() {
    const columns = ["ID","Name", "Mobile Number", "NIC","Package","Price"];
    const data = [
        [101,"abc","0123456789","0123456789","Bed Only","1500"],
    ];
    const btnName = "Booking Now";

    const handleEdit = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };
    const handleDelete = (rowIndex) => {
        console.log(`Deleting row ${rowIndex}`);
    };
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (event) => {
        event.preventDefault();
        console.log("Booking information saved");
        setModalOpen(false);
    };
    return (
        <div className='d-flex'>
            <SidebarUser />
            <div className="flex-grow-1 p-3">
                <h2>Bookings</h2>
                <Table
                    data={data}
                    columns={columns}
                    btnName={btnName}
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