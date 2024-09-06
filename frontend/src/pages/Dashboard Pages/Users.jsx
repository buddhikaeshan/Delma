import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table';
import AddUsers from '../../components/Forms/AddUsers';
import config from '../../config';

function Users() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const columns = ["Id", "Name", "Type", "Telephone", "NIC", "Email", "Address", "Status"];
    const btnName = "Add New User";

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${config.BASE_URL}/user`);
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const users = await response.json();
            const formattedData = users.map(user => [
                user.userId,
                user.userName,
                user.userType,
                user.userTP,
                user.userNIC,
                user.userEmail,
                user.userAddress,
                user.userStatus,
            ]);
            setData(formattedData);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const handleEdit = (rowIndex) => {
        const selectedUserData = data[rowIndex];
        setSelectedUser({
            userId: selectedUserData[0],
            userName: selectedUserData[1],
            userType: selectedUserData[2],
            userTP: selectedUserData[3],
            userNIC: selectedUserData[4],
            userEmail: selectedUserData[5],
            userAddress: selectedUserData[6],

        });
        setModalOpen(true);
    };

    const handleDelete = async (rowIndex) => {
        try {
            const userId = data[rowIndex][0];
            const response = await fetch(`${config.BASE_URL}/user/${userId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete User');
            }

            setData(prevData => prevData.filter((_, index) => index !== rowIndex));
            console.log(`User with ID ${userId} deleted successfully`);
            fetchUsers();
        } catch (err) {
            console.error('Error deleting user:', err);
            setError(err.message);
        }
    };


    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (event) => {
        event.preventDefault();
        console.log("User information saved");
        fetchUsers();
        setModalOpen(false);
    };

    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Users</h2>
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
                                    <h5 className="modal-title">Add New User</h5>
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
                                    <AddUsers onClose={handleCloseModal} onSave={handleSave} user={selectedUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users;
