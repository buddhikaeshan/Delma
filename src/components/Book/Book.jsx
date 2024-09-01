import React from 'react'
import './Book.css'

const Book = () => {
    return (
        <div>
            <div className="bg-background text-foreground">
                <div className="relative banner">
                    <img className="banner" src="https://www.hilton.com/im/en/CZMPCHH/7888781/czmpc-pool-3.jpg?impolicy=crop&cw=5000&ch=3203&gravity=NorthWest&xposition=0&yposition=64&rw=1280&rh=820" alt="Hotel background" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-50">
                    </div>
                    <div className="welcome ">
                        <div className=" absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                            <h1 className="welcome_text ">WELCOME TO</h1>
                            <h1 className="welcome_text">Delma Mount View</h1>
                            <p className="welcome_p">Delma Mount View Hotel Kandy offers 8 rooms approximately a 15-minute drive from Ranawana Purana Rajamaha Viharaya. </p>
                        </div>
                    </div>
                </div>

                <div className="check ">
                    <h1 className="check_caption">Check availability</h1>
                    <div className="input-center">
                    <div className="inputs">

                        <div className="input_container">
                            <input type="date" id="input" required="" />
                            <label for="input" className="label">Check In Date</label>
                            <div className="underline"></div>
                        </div>

                        <div className="input_container">
                            <input type="date" id="input" required="" />
                            <label for="input" className="label">Check Out Date</label>
                            <div className="underline"></div>
                        </div>

                        <div className="input_container">
                            <button className="w-full button ">Check Now</button>
                        </div>

                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Book