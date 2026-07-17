import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
const upper = () => {
  return (
    <div className='flex w-full gap-3 px-2 pt-2.5 '>

      <div className='bg-blue-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Total Watersheds</span>
          <h1 className='text-white text-lg font-bold my-1'>1,248</h1>
          <span className='text-blue-200 text-[10px]'>+12 This Month</span>
        </div>
        <div className='flex justify-center items-center'>
          <BarChartOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 20 }} />
        </div>
      </div>

      <div className='bg-green-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Total Rainfall</span>
          <h1 className='text-white text-lg font-bold my-1'>24.8 mm</h1>
          <span className='text-green-200 text-[10px]'>+8% vs Yesterday</span>
        </div>
        <div className='flex justify-center items-center'>
          <ThunderstormOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-purple-500 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Soil Moisture</span>
          <h1 className='text-white text-lg font-bold my-1'>28.6%</h1>
          <span className='text-purple-200 text-[10px]'>-3% vs Yesterday</span>
        </div>
        <div className='flex justify-center items-center'>
          <OpacityOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-orange-400 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Active Alerts</span>
          <h1 className='text-white text-lg font-bold my-1'>07</h1>
          <span className='text-orange-200 text-[10px]'>View All Alerts</span>
        </div>
        <div className='flex justify-center items-center'>
          <WarningOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-teal-500 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Flood Risk</span>
          <h1 className='text-white text-lg font-bold my-1'>15</h1>
          <span className='text-teal-200 text-[10px]'>High Risk</span>
        </div>
        <div className='flex justify-center items-center'>
          <WaterOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-blue-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-2'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-[10px] font-semibold'>Water Balance</span>
          <h1 className='text-white text-lg font-bold my-1'>+6.9 mm</h1>
          <span className='text-blue-200 text-[10px]'>Surplus</span>
        </div>
        <div className='flex justify-center items-center'>
          <OpacityOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

    </div>
  )
}

export default upper

