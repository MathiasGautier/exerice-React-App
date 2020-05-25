import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navBar">
            <h2><NavLink exact to="/">HOME</NavLink></h2>
            <h2><NavLink exact to="/temperature">Temperature</NavLink></h2>
            <h2><NavLink exact to="/customize-image">Customize Image</NavLink></h2>
        </div>
    )
}

export default Navbar
