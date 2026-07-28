import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
const upper = ({ className }) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full px-1 pt-1 ${className || 'h-auto'}`}>

      <div className='bg-blue-600 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Total Watersheds</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>1,248</h1>
          <span className='text-blue-200 text-[8px] xl:text-[9px] truncate'>+12 This Month</span>
        </div>
        <div className='flex-shrink-0'>
          <BarChartOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

      <div className='bg-green-600 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Total Rainfall</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>24.8 mm</h1>
          <span className='text-green-200 text-[8px] xl:text-[9px] truncate'>+8% vs Yesterday</span>
        </div>
        <div className='flex-shrink-0'>
          <ThunderstormOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

      <div className='bg-purple-500 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Soil Moisture</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>28.6%</h1>
          <span className='text-purple-200 text-[8px] xl:text-[9px] truncate'>-3% vs Yesterday</span>
        </div>
        <div className='flex-shrink-0'>
          <OpacityOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

      <div className='bg-orange-400 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Active Alerts</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>07</h1>
          <span className='text-orange-200 text-[8px] xl:text-[9px] truncate'>View All Alerts</span>
        </div>
        <div className='flex-shrink-0'>
          <WarningOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

      <div className='bg-teal-500 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Flood Risk</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>15</h1>
          <span className='text-teal-200 text-[8px] xl:text-[9px] truncate'>High Risk</span>
        </div>
        <div className='flex-shrink-0'>
          <WaterOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

      <div className='bg-blue-600 rounded-xl flex justify-between items-center p-2 min-w-0'>
        <div className='flex flex-col min-w-0 pr-1'>
          <span className='text-gray-100 text-[9px] xl:text-[10px] font-semibold truncate'>Water Balance</span>
          <h1 className='text-white text-xs md:text-sm xl:text-base font-bold my-0.5 truncate'>+6.9 mm</h1>
          <span className='text-blue-200 text-[8px] xl:text-[9px] truncate'>Surplus</span>
        </div>
        <div className='flex-shrink-0'>
          <OpacityOutlinedIcon className='text-white opacity-80' sx={{ fontSize: { xs: 24, md: 28, lg: 32 } }} />
        </div>
      </div>

    </div>
  )
}

export default upper

