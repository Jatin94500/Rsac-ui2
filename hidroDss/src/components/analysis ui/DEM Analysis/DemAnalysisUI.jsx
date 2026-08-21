import React from 'react';
import DemMap from './Map/Map';
import AnalysisName from './File Form/Analysis Name/AnalysisName';
import Analysis from './File Form/Analysis Name/Analysis';

function DemAnalysisUI() {
    return (
        <div className='flex w-full px-2 mt-4 gap-4 h-[calc(100vh-2rem)]' >
            <div className=' w-4/3 '>
                <DemMap />
            </div>
            <div className='w-1/3 flex flex-col -space-y-8'>
                <AnalysisName />
                <Analysis />
            </div>

        </div>
    );

}

export default DemAnalysisUI;