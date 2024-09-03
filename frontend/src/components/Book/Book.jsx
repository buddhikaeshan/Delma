import React, { useEffect } from 'react'
import './Book.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './carousel/Carousel';

const Book = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);
    return (
        <div>
            <div className="text-foreground ">
                <Carousel/>

                <div className="check ">
                    <div className="input-center">
                        <div className="inputs">

                            <div className="input_container" data-aos="fade-up"     data-aos-anchor-placement="top-bottom">
                                <input type="date" id="input" required="" />
                                <label for="input" className="label">Check In Date</label>
                                <div className="underline"></div>
                            </div>

                            <div className="input_container" data-aos="fade-up"     data-aos-duration="6000">
                                <input type="date" id="input" required="" />
                                <label for="input" className="label">Check Out Date</label>
                                <div className="underline"></div>
                            </div>

                            <div className="input_container"  data-aos="fade-up"  data-aos-duration="3000">
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