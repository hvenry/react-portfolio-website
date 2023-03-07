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
            <div className="toggleButton">
                <button
                /*on clicked, we set the expanded navbar to the opposite of what it was*/
                    onClick={() => {
                        setExpandedNavbar((prev) => !prev)
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to ="/"> Home </Link>
                <Link to ="/projects"> Projects </Link>
                <Link to ="/experience"> Experience </Link>
            </div>
        </div>
    );
}

export default Navbar