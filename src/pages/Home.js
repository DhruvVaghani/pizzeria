import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from "../asets/pizza.jpeg"
import "../styles/Home.css"

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${ BannerImage})`}}>
    <div className='headerContainer' ></div>
    <h1>Pizzeria</h1>
    <p>Pizza For Everyone</p>
    <Link to="menu">
    <button>ORDER NOW</button>
    </Link>
    </div>
  )
}

export default Home;