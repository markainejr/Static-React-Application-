import React from "react"
import airbnbLogo from './images/airbnbLogo.png'
import './style.css'


export default function Navbar() {
    return (
        <nav>
            <img src= {airbnbLogo} alt="logo" className="nav--logo" />
        </nav>
    )
}