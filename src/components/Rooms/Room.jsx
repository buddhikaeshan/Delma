import React from 'react'
import './Room.css'


const Room = () => {
    return (
        <div className='room'>
            <div className="room-back">
                <div className="caption">
                    <h1>Accommodation</h1>
                </div>
                <div className="content-area-room">
                    <div className="card-room">
                        <img src="https://www.hilton.com/im/en/CZMPCHH/7888781/czmpc-pool-3.jpg?impolicy=crop&cw=5000&ch=3203&gravity=NorthWest&xposition=0&yposition=64&rw=1280&rh=820" alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Double Room</h2>
                            <p className="card-room-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident repudiandae doloribus temporibus cum iure, odit laborum beatae repellendus sed consequuntur, placeat tenetur odio unde ea quos eius similique id.</p>
                        </div>
                    </div>
                    <div className="card-room">
                        <img src="https://www.hilton.com/im/en/CZMPCHH/7888781/czmpc-pool-3.jpg?impolicy=crop&cw=5000&ch=3203&gravity=NorthWest&xposition=0&yposition=64&rw=1280&rh=820" alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Double Room</h2>
                            <p className="card-room-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident repudiandae doloribus temporibus cum iure, odit laborum beatae repellendus sed consequuntur, placeat tenetur odio unde ea quos eius similique id.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Room