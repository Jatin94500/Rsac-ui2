import "./sidebar.css";
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                className="sidebar-toggle"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expand={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className=""><MenuIcon /></span>
            </button>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </nav>


        </>
    );
}

export default Sidebar