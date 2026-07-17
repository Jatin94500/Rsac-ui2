import "./sidebar.css";
import React, { useState } from 'react'
import WindowIcon from '@mui/icons-material/Window';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SideDropdown from "../SideDropdown/SideDropdown";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Person, Settings, Summarize } from "@mui/icons-material";

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
                    <div className="gap-1">
                        <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden" >
                            <WindowIcon sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh", gap: "0" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>Dashboard</span>


                        </div >
                        <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden">
                            <AddLocationAltIcon sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>Intercative Map</span>


                        </div>
                    </div>
                    <div className="Sidebar-Sub-menu">
                        <div className="bg-[#011d3c] rounded-xl pb-2 pt-1.5 ml-2 mr-2  mt-1  gap-y-4">
                            <h1 className="text-xs text-slate-300 font-bold ml-4 mt-2 mb-1 uppercase tracking-wider">Data Explorer</h1>
                            <div style={{ marginLeft: "2vh", display: "flex", flexDirection: "column", gap: "0.5vh", marginTop: "1vh", marginRight: "2vh", fontSize: "2vh" }}>
                                <SideDropdown title="Chrisp Rainfall" >
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
                        <div className="bg-[#011d3c] rounded-xl pb-2 ml-2 mr-2  mt-1 pt-2">
                            <h1 className="text-xs text-slate-300 font-bold ml-4 mt-2 mb-1 uppercase tracking-wider">Hydrology Analysis</h1>
                            <div style={{ marginLeft: "2vh", display: "flex", flexDirection: "column", gap: "0.5vh", marginTop: "1vh", marginRight: "2vh" }}>
                                <SideDropdown title="Chrisp Rainfall" >
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
                        <div className="bg-[#011d3c] rounded-xl pb-2 ml-2 mr-2 mt-1 pt-2">
                            <h1 className="text-xs text-slate-300 font-bold ml-4 mt-2 mb-1 uppercase tracking-wider">Discison Support System</h1>
                            <div style={{ marginLeft: "2vh", display: "flex", flexDirection: "column", gap: "0.5vh", marginTop: "1vh", marginRight: "2vh" }}>
                                <SideDropdown title="Drought DSS" >
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                                </SideDropdown>
                                <SideDropdown title="Flood DSS" >
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                                </SideDropdown>
                                <SideDropdown title="Water Quality DSS" >
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                                </SideDropdown>
                                <SideDropdown title="Irrigation Advisory" >
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                    <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                                </SideDropdown>

                            </div>
                        </div>

                    </div>
                    <div className=" mt-2 bg-[#011d3c] rounded-xl pb-2 ml-2 mr-2  ">
                        <button className="w-full flex items-center py-1 hover:bg-slate-700 transition-colors cursor-pointer text-left">
                            <AnalyticsIcon sx={{ fontSize: "2.9vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>Analytics Chart</span>
                        </button>


                    </div>

                    <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden">
                        <button className="w-full flex items-center py-2 hover:bg-slate-700 transition-colors cursor-pointer text-left">
                            <NotificationsIcon sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>Alerts & Notifications</span>
                        </button>
                    </div>

                    <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden">
                        <button className="w-full flex items-center py-2 hover:bg-slate-700 transition-colors cursor-pointer text-left">
                            <Summarize sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>Reports & Exports</span>
                        </button>
                    </div>

                    <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden">
                        <button className="w-full flex items-center py-2 hover:bg-slate-700 transition-colors cursor-pointer text-left">
                            <Person sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>User Management</span>
                        </button>
                    </div>

                    <div className=" mt-2 bg-[#011d3c] rounded-xl ml-2 mr-2 overflow-hidden">
                        <button
                            className="w-full flex items-center py-2 hover:bg-slate-700 transition-colors cursor-pointer text-left"
                        >
                            <Settings sx={{ fontSize: "2.8vh", color: '#3b82f6', margin: "0.4vh", marginLeft: "1.8vh" }} />
                            <span style={{ fontSize: "1.5vh", color: "white" }}>System Settings</span>
                        </button>
                    </div>
                </div>

            </nav>


        </>
    );
}

export default Sidebar