import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

function Upperbar() {
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
    <div className="flex flex-wrap items-center justify-start gap-2 p-3 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl shadow-sm border border-slate-200/80">
      {array.map((item, index) => (
        <div
          className="flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-sky-400 transition-all duration-200 cursor-default"
          key={index}
        >
          <div className="text-sky-600">{item.image}</div>
          <div className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upperbar;
