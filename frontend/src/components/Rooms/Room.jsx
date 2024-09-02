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
                        <img src={assets.room1} alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Single Room</h2>
                            <p className="card-room-description">Single room equipped with modern amenities, including <b>free Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, and a bathroom</b> for your comfort and convenience.</p>
                            <ul className='card-room-price'>
                                <li>R/O LKR<span>4500.00</span></li>
                                <li>B/B LKR<span>5700.00</span></li>
                                <li>H/B LKR<span>6900.00</span></li>
                                <li>F/B LKR<span>8000.00</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-room">
                        <img src={assets.room2} alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Double Room</h2>
                            <p className="card-room-description">Double room ideal for <b>two adults, with accommodation available for children under 12</b>. Features a <b><span>king-sized bed</span>, Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, bathroom</b> and all the comforts needed for a relaxing stay.</p>
                            <ul className='card-room-price'>
                                <li>R/O LKR<span>6900.00</span></li>
                                <li>B/B LKR<span>10,350.00</span></li>
                                <li>H/B LKR<span>13,225.00</span></li>
                                <li>F/B LKR<span>16,100.00</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-room">
                        <img src={assets.room3} alt="card-room Image" />
                        <div className="card-room-content">
                            <h2 className="card-room-title">Triple Room</h2>
                            <p className="card-room-description">Triple room ideal for <b>three adults, with accommodation available for children under 12.</b> Features a <b><span>king-sized bed, a queen-sized bed,</span> Wi-Fi, air conditioning, a flat-screen TV, a mini fridge bar, bathroom</b> and all the comforts needed for a relaxing stay.</p>
                            <ul className='card-room-price'>
                                <li>R/O LKR<span>8000.00</span></li>
                                <li>B/B LKR<span>16,100.00</span></li>
                                <li>H/B LKR<span>20,500.00</span></li>
                                <li>F/B LKR<span>24,700.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Room