import { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Table from '../../components/Table';
import AddUsers from '../../components/Forms/AddUsers';
import config from '../../config';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const columns = ["Name", "type", "Telephone", "NIC", "Email", "Address"];


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/users`);
                setUsers(response.data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching Users", error);
            }
        };

        fetchUsers();
    }, []);

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
        console.log("User information saved");
        setModalOpen(false);
    };
    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Users</h2>
                <Table
                    data={users.map((user) => [
                        user.userName,
                        user.userType,
                        user.userTP,
                        user.userNIC,
                        user.userEmail,
                        user.userAddress,
                        user.userStatus,
                    ])}
                    columns={columns}
                    btnName="Add New User"
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
                                    <AddUsers onClose={handleCloseModal} onSave={handleSave} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users