import React, { useState } from 'react';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

function Upperbar({ activeTab, onTabSelect }) {


  const array = [
    { image: <CloudySnowingIcon />, text: 'CHIRPS Rainfall' },
    { image: <ThermostatIcon />, text: 'ERAS Climate' },
    { image: <OpacityIcon />, text: 'SMAP Soil Moisture' },
    { image: <TsunamiIcon />, text: 'DEM Analysis' },
    { image: <WbCloudyIcon />, text: 'Soil Grids ' },
    { image: <SatelliteAltIcon />, text: 'Sentinel-2' },
    { image: <CloudySnowingIcon />, text: 'IMD Rainfall' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-2 p-1.5 sm:p-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl shadow-sm border border-slate-200/80">
      {array.map((item, index) => {
        const isSelected = activeTab === item.text;
        return (
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border rounded-full transition-all duration-200 cursor-pointer ${isSelected
              ? 'bg-sky-600 border-sky-600 shadow-md scale-[1.02]'
              : 'bg-white/90 border-slate-200 shadow-sm hover:shadow-md hover:border-sky-400'
              }`}
            onClick={() => onTabSelect(item.text)}
            key={index}
          >
            <div className={isSelected ? 'text-white' : 'text-sky-600'}>
              {item.image}
            </div>
            <div className={`text-sm font-semibold whitespace-nowrap ${isSelected ? 'text-white' : 'text-slate-700'}`}>
              {item.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Upperbar;
