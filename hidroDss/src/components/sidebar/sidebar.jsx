import "./sidebar.css";
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Sidebar({ isOpen, setIsOpen }) {

    return (
        <>

            <nav className={isOpen ? "sidebar open" : "sidebar"}>
                <img
                    src="/vecteezy_hydroponic-logo-vector-template-illustration_16081435.webp"
                    alt=" Logo"
                    className="logo"

                />
                <div className="header-content2">

                    <h1 id="header-title2">
                        <span style={{ color: "lightblue" }}>HYDROLOGY</span>
                        <span style={{ color: "green" }}>DSS</span>
                    </h1>
                    <h3 id="header-subtitle2">
                        <span style={{ color: "white" }}>Hydrology DSS Program</span>
                    </h3>
                </div>
                <div>

                </div>

            </nav>


        </>
    );
}

export default Sidebar