import React from 'react'
import assets from '../../../assets/assets'
import './Carousel.css'

function Carousel() {
    return (

        <div className="relative banner">

            <div id="carouselExampleIndicators" className="carousel slide relative banner" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 banner" src={assets.back} alt="Hotel background" loading="lazy" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>                          
                            <div className="welcome  absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                                <h1 className="welcome_text ">WELCOME TO</h1>
                                <h1 className="welcome_text">Delma Mount View</h1>
                                <p className="welcome_p">Delma Mount View Hotel Kandy offers 8 rooms approximately a 15-minute drive from Ranawana Purana Rajamaha Viharaya. </p>
                            </div>                         
                    </div>
                    <div className="carousel-item bg-image">
                        <div className="relative w-100">
                            <img className="d-block w-100 banner" src={assets.hotel} alt="Hotel background" loading="lazy" />
                            <div className="absolute inset-0 bg-black opacity-50"></div> 
                            <div className="welcome absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                                <h1 className="welcome_text" id='hW'>WELCOME TO</h1>
                                <h1 className="welcome_text" id='hD'>Delma Mount View</h1>
                                <p className="welcome_p" id='hp'>
                                    Delma Mount View Hotel Kandy offers 8 rooms approximately a 15-minute drive from Ranawana Purana Rajamaha Viharaya.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Carousel