import "./sidebar.css";
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Sidebar({ isOpen, setIsOpen }) {

    return (
        <>

            <nav className={isOpen ? "sidebar open" : "sidebar"}>
                <div className="header-content">
                    <img
                        src="/vecteezy_hydroponic-logo-vector-template-illustration_16081435.webp"
                        alt=" Logo"
                        className="logo"

                    />
                    <h1 id="header-title">
                        <span style={{ color: "lightblue" }}>HYDROLOGY</span>
                        <span style={{ color: "green" }}>DSS</span>
                        <span style={{ color: "lightblue" }}>PLATFORM</span>
                    </h1>
                    <h3 id="header-subtitle">
                        <span style={{ color: "white" }}>Smart Decision </span>
                        <span style={{ color: "white" }}>Sustainable Water Future</span>
                    </h3>
                </div>

            </nav>


        </>
    );
}

export default Sidebar