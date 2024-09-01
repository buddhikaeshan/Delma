import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Table from '../../components/Table'

function Rooms() {
    const columns = ["type", "Room Number"];
    const data = [
        ["Double", "001"],
    ];
    const btnName = "Add New Room";

    const handleEdit = (rowIndex) => {
        console.log(`Editing row ${rowIndex}`);
    };

    const handleDelete = (rowIndex) => {
        console.log(`Deleting row ${rowIndex}`);
    };
    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Users</h2>
                <Table
                    data={data}
                    columns={columns}
                    btnName={btnName}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default Rooms