import "./sidebar.css";
import React, { useState } from 'react'
import WindowIcon from '@mui/icons-material/Window';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SideDropdown from "../SideDropdown/SideDropdown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"


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
                <div className="Sidebar-menu">
                    <div >
                        <WindowIcon sx={{ fontSize: 27, color: '#3b82f6', margin: "0.9rem" }} />
                        <span style={{ fontSize: "1rem", color: "white" }}>Dashboard</span>


                    </div>
                    <div >
                        <AddLocationAltIcon sx={{ fontSize: 27, color: '#3b82f6', margin: "0.9rem" }} />
                        <span style={{ fontSize: "1rem", color: "white" }}>Intercative Map</span>


                    </div>
                    <div className="Sidebar-Sub-menu">
                        <h1 className="h-2 ml-6">Data Explorer</h1>
                        <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
                            <SideDropdown title="Chrisp Rainfall" className="" >
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="ERAS Climate" >
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SMAP Soil Moisture" >
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SoilGrid" >
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="IMD Rainfall" >
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                        </div>
                    </div>
                </div>

            </nav>


        </>
    );
}

export default Sidebar