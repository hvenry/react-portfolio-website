import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    // state in application to see if we have expanded navbar
    const [expandedNavbar, setExpandedNavbar] = useState(false);
    // grab location, var used to see what page we are on
    const location = useLocation();
    // run useEffect when location changes
    useEffect(() => {
        // set navbar to false when location changes
        setExpandedNavbar(false);
    }, [location])
    
    return(
        <div class="navbar" id={expandedNavbar ? "open" : "close"}>
            {/* title */}
            <label className="logo"> HENRY VENDITTELLI </label>

            {/* toggle button */}
            <div>
                <button className="toggleButton"
                /*on clicked, we set the expanded navbar to the opposite of what it was*/
                    onClick={() => {
                        setExpandedNavbar((prev) => !prev)
                    }}>
                    <ReorderIcon />
                </button>
            </div>

            {/* navbar links */}
            <div className="navbar-links">
                <ul>
                    <li><Link to ="/"> HOME </Link></li>
                    <li><Link to ="/experience"> ABOUT </Link></li>
                    <li><Link to ="/projects"> PROJECTS </Link></li>
                    <li><Link to ="/contact"> CONTACT </Link></li>
                </ul>
            </div>            
        </div>
    );
}

export default Navbar