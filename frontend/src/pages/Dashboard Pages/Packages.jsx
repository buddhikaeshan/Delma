import { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table';
import AddPackages from '../../components/Forms/AddPackages';
import config from '../../config';

function Packages() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const columns = ["Package ID", "Package Name", "Bed Type", "Price"];
    const btnName = "Add New Package";

    useEffect(() => {
        fetchPackage();
    }, []);

    const fetchPackage = async () => {
        try {
            const response = await fetch(`${config.BASE_URL}/packages`);
            if (!response.ok) {
                throw new Error('Failed to fetch Package');
            }
            const packages = await response.json();
            const formattedData = packages.map(packages => [
                packages.packageId,
                packages.packageName,
                packages.bedType,
                packages.packagePrice,
            ]);
            setData(formattedData);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };


    const handleDelete = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };

    const handleEdit = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (event) => {
        event.preventDefault();
        console.log("Package information saved");
        setModalOpen(false);
        fetchPackage();
    };

    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Packages</h2>
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
