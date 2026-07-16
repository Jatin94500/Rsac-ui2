import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
const upper = () => {
  return (
    <div className='flex  whitespace-nowrap w-50%'>
        
      <div className='bg-blue-600 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'> Total Watersheds</span>
        <h1 className='text-gray-100 text-2xl whitespace-nowrap font-bold'>1,248</h1>
        <span className='text-gray-100 whitespace-nowrap'>+12 This Month</span>
     </div>
     <div className='justify-center items-center flex  '>

  <BarChartOutlinedIcon className='text-white ' sx={{ fontSize: 64 }} />


     </div>
      </div>

      <div className='bg-green-600 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'> Total Rainfall(Today)</span>
        <h1 className='text-gray-100 text-2xl whitespace-nowrap font-bold'>24.8 mm</h1>
        <span className='text-gray-100 whitespace-nowrap'> +8% vs Yesterday</span>
     </div>
     <div className='justify-center items-center flex  '>

  <ThunderstormOutlinedIcon className='text-white bg ' sx={{ fontSize: 64 }} />


     </div>
      </div>
   

      <div className='bg-purple-500 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'>Soil Moisture(Avg)</span>
        <h1 className='text-gray-100 text-2xl whitespace-nowrap font-bold'>28.6%</h1>
        <span className='text-gray-100 whitespace-nowrap'> -3% vs Yesterday</span>
     </div>
     <div className='justify-center items-center flex  '>

  < OpacityOutlinedIcon className='text-white bg ' sx={{ fontSize: 63 }} />


     </div>
      </div> 
      

      <div className='bg-orange-400 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'>Active Alerts</span>
        <h1 className='text-gray-100 text-xl font-bold whitespace-nowrap'>07</h1>
        <span className='text-gray-100 whitespace-nowrap'> View All Alerts</span>
     </div>
     <div className='justify-center items-center flex  '>

  < WarningOutlinedIcon className='text-white bg ' sx={{ fontSize: 63 }} />


     </div>
      </div> 

            <div className='bg-teal-500 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'>Flood Risk Areas</span>
        <h1 className='text-gray-100 text-xl font-bold whitespace-nowrap'>15</h1>
        <span className='text-gray-100 whitespace-nowrap'> High Risk</span>
     </div>
     <div className='justify-center items-center flex  '>

  < WaterOutlinedIcon className='text-white bg ' sx={{ fontSize: 63 }} />


     </div>
      </div> 

      <div className='bg-blue-600 m-1.5 rounded-2xl flex '>
     <div className='flex flex-col p-3 whitespace-nowrap'>
        <span className='text-gray-100 whitespace-nowrap'> Water Balance (This Month)</span>
        <h1 className='text-gray-100 text-2xl whitespace-nowrap font-bold'>+6.9 mm </h1>
        <span className='text-gray-100 whitespace-nowrap'>Surplus</span>
     </div>
     <div className='justify-center items-center flex  '>

  <OpacityOutlinedIcon className='text-white ' sx={{ fontSize: 64 }} />


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