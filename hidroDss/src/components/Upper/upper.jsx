import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
const upper = () => {
  return (
    <div className='flex w-full gap-3 px-2 pt-2.5'>

      <div className='bg-blue-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Total Watersheds</span>
          <h1 className='text-white text-lg font-bold my-1'>1,248</h1>
          <span className='text-blue-200 text-[10px]'>+12 This Month</span>
        </div>
        <div className='flex justify-center items-center'>
          <BarChartOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-green-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Total Rainfall</span>
          <h1 className='text-white text-lg font-bold my-1'>24.8 mm</h1>
          <span className='text-green-200 text-[10px]'>+8% vs Yesterday</span>
        </div>
        <div className='flex justify-center items-center'>
          <ThunderstormOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-purple-500 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Soil Moisture</span>
          <h1 className='text-white text-lg font-bold my-1'>28.6%</h1>
          <span className='text-purple-200 text-[10px]'>-3% vs Yesterday</span>
        </div>
        <div className='flex justify-center items-center'>
          <OpacityOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-orange-400 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Active Alerts</span>
          <h1 className='text-white text-lg font-bold my-1'>07</h1>
          <span className='text-orange-200 text-[10px]'>View All Alerts</span>
        </div>
        <div className='flex justify-center items-center'>
          <WarningOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-teal-500 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Flood Risk</span>
          <h1 className='text-white text-lg font-bold my-1'>15</h1>
          <span className='text-teal-200 text-[10px]'>High Risk</span>
        </div>
        <div className='flex justify-center items-center'>
          <WaterOutlinedIcon className='text-white opacity-80' sx={{ fontSize: 36 }} />
        </div>
      </div>

      <div className='bg-blue-600 rounded-2xl flex flex-1 justify-between items-center overflow-hidden p-3'>
        <div className='flex flex-col'>
          <span className='text-gray-100 text-xs font-semibold'>Water Balance</span>
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

{/*import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined'
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined'
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined'
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined'

const cards = [
  {
    title: 'Total Watersheds',
    value: '1,248',
    note: '+12 This Month',
    color: 'bg-blue-600',
    icon: <BarChartOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 64 } }} />,
  },
  {
    title: 'Total Rainfall (Today)',
    value: '24.8 mm',
    note: '+8% vs Yesterday',
    color: 'bg-green-600',
    icon: <ThunderstormOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 64 } }} />,
  },
  {
    title: 'Soil Moisture (Avg)',
    value: '28.6%',
    note: '-3% vs Yesterday',
    color: 'bg-purple-500',
    icon: <OpacityOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 63 } }} />,
  },
  {
    title: 'Active Alerts',
    value: '07',
    note: 'View All Alerts',
    color: 'bg-orange-400',
    icon: <WarningOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 63 } }} />,
  },
  {
    title: 'Flood Risk Areas',
    value: '15',
    note: 'High Risk',
    color: 'bg-teal-500',
    icon: <WaterOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 63 } }} />,
  },
  {
    title: 'Water Balance (This Month)',
    value: '+6.9 mm',
    note: 'Surplus',
    color: 'bg-blue-600',
    icon: <OpacityOutlinedIcon sx={{ fontSize: { xs: 40, sm: 56, md: 64 } }} />,
  },
]

const Upper = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-3 p-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} rounded-2xl text-white flex items-center justify-between gap-3 p-4 min-w-0`}
        >
          <div className="flex min-w-0 flex-col">
            <span className="text-sm sm:text-base break-words">{card.title}</span>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight break-words">
              {card.value}
            </h1>
            <span className="text-sm sm:text-base break-words">{card.note}</span>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Upper*/}