import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../asets/pizzaLogo.png"
import "../styles/navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react'



function Navbar() {

const [openLinks,setOpenLinks]= useState(false) 

function toggleNavbar(){
    setOpenLinks(!openLinks)
}

    return (
        <div className='navbar'>
            
            <div className="leftSide">
                <img src={Logo} alt="" />
                <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>


        </div>
    )
}

export default Navbar