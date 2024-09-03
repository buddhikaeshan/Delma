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
            <NavBar/>
            <Book/>
            <About/>
            <Offers/>
            <Room/>
            <Dine/>
            <Fun/>
            <Gallery/>
            <Footer/>
            
        </div>
    )
}

export default Home