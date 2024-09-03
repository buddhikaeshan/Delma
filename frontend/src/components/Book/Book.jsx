import React, { useEffect } from 'react'
import './Book.css'
import assets from '../../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Book = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);
    return (
        <div>
            <div className="text-foreground ">
                <div className="relative banner">
                    <img className="banner" src={assets.back} alt="Hotel background" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-50">
                    </div>
                    <div className="welcome ">
                        <div className=" absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                            <h1 className="welcome_text ">WELCOME TO</h1>
                            <h1 className="welcome_text">Delma Mount View</h1>
                            <p className="welcome_p">Delma Mount View Hotel Kandy is a luxurious 3-star hotel, located approximately a 15-minute drive from Ranawana Purana Rajamaha Viharaya. </p>
                        </div>
                    </div>
                </div>

                <div className="check ">
                    <div className="input-center">
                        <div className="inputs">

                            <div className="input_container" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                                <input type="date" id="input" required="" />
                                <label for="input" className="label">Check In Date</label>
                                <div className="underline"></div>
                            </div>

                            <div className="input_container" data-aos="fade-up"     data-aos-duration="6000">
                                <input type="date" id="input" required="" />
                                <label for="input" className="label">Check Out Date</label>
                                <div className="underline"></div>
                            </div>

                            <div className="input_container"  data-aos="fade-up"     data-aos-duration="3000">
                                <button className="w-100 button ">Check Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book