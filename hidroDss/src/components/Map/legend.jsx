import React from 'react';
import { Menu, PlusCircle, Layers, Monitor, Settings, Save, Map as MapIcon, Grid } from 'lucide-react';

const Legend = () => {
    return (
        <div className='absolute top-0 left-0 h-full flex flex-col z-10 w-[60px] shadow-2xl '>
            <div className='bg-white h-[60px] flex items-center justify-center cursor-pointer hover:bg-grey-50 transition-colors'>
                <Menu className='bg-[#2a2a2a]  flex-1 flex flex-col items-center py-4 space-y-6' />

            </div>
            <div className="bg-[#2a2a2a] flex-1 flex flex-col items-center py-4 space-y-6">
                <button className="text-gray-400 hover:text-white transition-color group relative ">
                    <PlusCircle size={22} strokeWidth={1.5} />


                </button>

                <button className='text-gray-400 hover:text-white transition-colors '>
                    <Layers size={22} strokeWidth={1.5} />

                </button>
                <button className='text-gray-400 hover:text-white transition-colors '>
                    <Monitor size={22} strokeWidth={1.5} />

                </button>  <button className="text-gray-400 hover:text-white transition-colors">
                    <Settings size={22} strokeWidth={1.5} />
                </button>

                <button className="text-gray-400 hover:text-white transition-colors">
                    <Save size={22} strokeWidth={1.5} />
                </button>

                <button className="text-gray-400 hover:text-white transition-colors">
                    <MapIcon size={22} strokeWidth={1.5} />
                </button>

                <button className="text-gray-400 hover:text-white transition-colors">
                    <Grid size={22} strokeWidth={1.5} />
                </button>

                <button className="text-gray-400 hover:text-white transition-colors">
                    <PlusCircle size={22} strokeWidth={1.5} />
                </button>
            </div>
        </div>

    )
}

export default Legend;