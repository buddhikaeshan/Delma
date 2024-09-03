import React from 'react'
import './Offers.css'
import assets from '../../assets/assets'
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Offers = () => {
    return (
        <div>
            <div className="offers">
                <div className="caption" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h1>Special Offers</h1>
                </div>
                <div className="offer_cards" data-aos="zoom-in">
                    <div className="container-1">

                        <div className="card-f" data-aos="zoom-in">
                            <p className="title-f">
                                <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />

                            </p>
                        </div>
                        <div className="card-f" data-aos="zoom-in">
                            <p className="title-f">
                                <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />
                            </p>
                        </div>
                        <div className="card-f" data-aos="zoom-in">
                            <p className="title-f">
                                <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />
                            </p>
                        </div>
                    </div>

                    <div className="container-2">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="swiper-slide--two">
                                <div>
                                    <div className="card-2">
                                        <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide--two">
                                <div>
                                    <div className="card-2">
                                        <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide--two">
                                <div>
                                    <div className="card-2">
                                        <img className="offer-banner" src={assets.offer1} alt="Hotel background" loading="lazy" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Offers