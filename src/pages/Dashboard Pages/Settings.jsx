import React from 'react'
import SideBar from '../../components/SideBar/SideBar'

function Settings() {
    return (
        <div className='d-flex'>
            <SideBar />
            <div className="flex-grow-1 p-3">
                <h2>Profile</h2>
            </div>
        </div>
    )
}

export default Settings