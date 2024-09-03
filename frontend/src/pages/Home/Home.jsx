import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Book from '../../components/Book/Book'
import About from '../../components/About/About'
import Offers from '../../components/Offers/Offers'
import Room from '../../components/Rooms/Room'
import Fun from '../../components/Fun/Fun'
import Dine from '../../components/Dine/Dine'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'

const Home = () => {
    return (
        <div>
            <div id='home'>
                <NavBar />
                <Book />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="offers">
                <Offers />
            </div>
            <div id="room">
                <Room />
            </div>
            <div id="dine">
                <Dine />
            </div>
            <div id="fun">
               <Fun /> 
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="footer">
               <Footer /> 
            </div>
        </div>
    )
}

export default Home