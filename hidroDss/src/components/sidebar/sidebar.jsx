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
                
                {/* Header Section */}
                <div className="flex items-center gap-2 px-3 py-4 border-b border-white">
                    <img
                        src="/vecteezy_hydroponic-logo-vector-template-illustration_16081435.webp"
                        alt="Logo"
                        className="w-[4.2rem] h-[4.2rem] object-contain shrink-0"
                    />
                    <div className="flex flex-col overflow-hidden">
                        <h1 className="text-[0.75rem] font-bold leading-none m-0 whitespace-nowrap truncate mb-1">
                            <span style={{ color: "lightblue" }}>HYDROLOGY </span>
                            <span style={{ color: "green" }}>DSS</span>
                        </h1>
                        <h3 className="text-[0.55rem] text-white leading-none m-0 whitespace-nowrap truncate">
                            Hydrology DSS Program
                        </h3>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="Sidebar-menu flex-1 overflow-y-auto scrollbar-hide px-3 py-4 flex flex-col gap-2">
                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <WindowIcon className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">Dashboard</span>
                    </button>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <AddLocationAltIcon className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">Interactive Map</span>
                    </button>

                    <SideDropdown title="DATAEXPLORER">
                        <div className="flex flex-col gap-1 mt-1 ml-1 mr-1">
                            <SideDropdown title="Chrisp Rainfall" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="ERAS Climate" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SMAP Soil Moisture" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SoilGrid" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="IMD Rainfall" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                        </div>
                    </SideDropdown>

                    <SideDropdown title="HYDROLOGY ANALYSIS">
                        <div className="flex flex-col gap-1 mt-1 ml-1 mr-1">
                            <SideDropdown title="Chrisp Rainfall" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="ERAS Climate" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SMAP Soil Moisture" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="SoilGrid" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="IMD Rainfall" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                        </div>
                    </SideDropdown>

                    <SideDropdown title="DISCISON SUPPORT SYSTEM">
                        <div className="flex flex-col gap-1 mt-1 ml-1 mr-1">
                            <SideDropdown title="Drought DSS" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="Flood DSS" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="Water Quality DSS" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                            <SideDropdown title="Irrigation Advisory" flyout={true}>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">CRIPS</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SMAP</a></li>
                                <li><a href="#" className="block p-2 text-white hover:bg-slate-600 rounded">SoilGrid</a></li>
                            </SideDropdown>
                        </div>
                    </SideDropdown>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm mt-1">
                        <AnalyticsIcon className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">Analytics Chart</span>
                    </button>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <NotificationsIcon className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">Alerts & Notifications</span>
                    </button>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <Summarize className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">Reports & Exports</span>
                    </button>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <Person className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">User Management</span>
                    </button>

                    <button className="w-full flex items-center py-2 px-4 bg-[#102c51] rounded-full hover:bg-[#1a3f72] transition-colors cursor-pointer text-left shadow-sm">
                        <Settings className="text-blue-400 mr-3" sx={{ fontSize: "1.2rem" }} />
                        <span className="text-xs text-white font-semibold">System Settings</span>
                    </button>
                </div>

            </nav>


        </>
    );
}

export default Sidebar