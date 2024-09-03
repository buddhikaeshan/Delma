import React from 'react'
import './Room.css'
import assets from '../../assets/assets'


const Room = () => {
    return (
        <div className='room'>
            <div className="room-back">
                <div className="caption">
                    <h1>Accommodation</h1>
                </div>
                <div className="content-area-room">
                    <div className="card-room">
                        <img src="https://i.ibb.co/5kXHpKh/room3.jpg" alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Single Room</h2>
                            <p className="card-room-description">Single room equipped with modern amenities, including <b>free Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, and a bathroom</b> for your comfort and convenience.</p>
                            
                        </div>
                    </div>
                    <div className="card-room">
                        <img src="https://i.ibb.co/pdJBM3f/room2.jpg" alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Double Room</h2>
                            <p className="card-room-description">Double room ideal for <b>two adults, with accommodation available for children under 12</b>. Features a <b><span>king-sized bed</span>, Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, bathroom</b> and all the comforts needed for a relaxing stay.</p>
                            
                        </div>
                    </div>
                    <div className="card-room">
                        <img src="https://i.ibb.co/9yHGKGC/room1.jpg" alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Triple Room</h2>
                            <p className="card-room-description">Triple room ideal for <b>three adults, with accommodation available for children under 12.</b> Features a <b><span>king-sized bed, a queen-sized bed,</span> Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, bathroom</b> and all the comforts needed for a relaxing stay.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Room