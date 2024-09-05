import { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table';
import AddPackages from '../../components/Forms/AddPackages';
import config from '../../config';
import axios from 'axios';

function Packages() {
    const [packages, setPackages] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const columns = ["Package Name", "Bed Type", "Price"];

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/package`);
                setPackages(response.data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching package", error);
            }
        };

        fetchPackage(); // Call the function correctly
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
        console.log("Package information saved");
        setModalOpen(false);
    };

    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Packages</h2>
                <Table
                    data={packages.map((pkg) => [
                        pkg.packageName,
                        pkg.bedType,
                        pkg.packagePrice,
                    ])}
                    columns={columns}
                    btnName="Add Package"
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
                                    <h5 className="modal-title">Add New Package</h5>
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
                                    <AddPackages onClose={handleCloseModal} onSave={handleSave} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Packages;
