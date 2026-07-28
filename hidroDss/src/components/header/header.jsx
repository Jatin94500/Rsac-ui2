import React, { useState, useEffect } from 'react';
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header({ onToggleSidebar }) {
    const [weather, setWeather] = useState({ temp: '--°C', desc: 'Loading...' });

    useEffect(() => {

        fetch('http://localhost:5000/api/weather?city=Lucknow')
            .then(res => res.json())
            .then(data => {
                if (data.temp) {
                    setWeather({
                        temp: Math.round(data.temp) + '°C',
                        desc: data.description.charAt(0).toUpperCase() + data.description.slice(1)
                    });
                }
            })
            .catch(err => {
                console.error("Failed to fetch weather:", err);
                setWeather({ temp: 'N/A', desc: 'Error' });
            });
    }, []);

    return (
        <header className="header h-[12%] ">
            <nav className="header-nav">
                <button className="header-hamburger" onClick={onToggleSidebar}>
                    <MenuIcon className="h-6 w-6" />
                </button>
                <div className="header-content">
                    <h1 id="header-title">
                        <span style={{ color: "blue" }}>HYDROLOGY  </span>
                        <span style={{ color: "green" }}>DSS </span>
                        <span style={{ color: "blue" }}>PLATFORM</span>
                    </h1>
                    <h3 id="header-subtitle">
                        <span style={{ color: "blue" }}>Smart Decision </span>
                        <span style={{ color: "blue" }}>●</span>
                        <span style={{ color: "blue" }}>Sustainable Water Future</span>
                    </h3>
                </div>

                <div className=" ml-auto flex scale-[90%] ">
                    <div className="flex items-center  rounded-md border border-gray-400 p-2 scale-[70%]">
                        <img className="w-10 h-10" src="/sunrise.png" alt="Weather icon"></img>
                        <div className='flex flex-col justify-center '>
                            <span className="">{weather.temp}</span>
                            <span className="text-xs text-gray-500">{weather.desc}</span>
                        </div>

                    </div>
                    <div className="notification scale-[70%]">
                        <NotificationsIcon className='h-6 w-6 mt-4 ' />
                    </div>
                    <div className="scale-[70%]">
                        <HelpIcon className='h-6 w-6 mt-4' />
                    </div>
                    <div className="flex items-center  rounded-md border border-gray-400 p-1 scale-[70%] ">
                        <div>
                            <AccountCircleIcon className='h-6 w-6 mt-2' />
                        </div>
                        <div className='flex flex-col justify-center '>
                            <span className="font-bold"> Admin User </span>
                            <span className="text-sm text-gray-500"> Administrator </span>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    )
}
export default Header;