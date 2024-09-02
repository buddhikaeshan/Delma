import React from 'react'
import assets from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="text-center text-lg-start bg-color text-muted">
                <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
                </div>
                <div className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <img className='footer-logo' src={assets.logo} alt="" />
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 text-white mx-auto mb-4">  
                            <h6 className="text-uppercase  text-warning  fw-bold mb-4">
                                    Useful links
                                </h6>  
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Rooms</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Dining</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto text-white mt-5 mb-4">
                                <p>
                                    <a href="#!" className="text-reset">Events</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Gallery</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 text-white mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase text-warning fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> No 213/7 Aladeniya Werellagama, Kandy, Sri Lanka</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +94 81 494 0746</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer