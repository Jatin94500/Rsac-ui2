import React, { useState } from 'react';

import Select from '@/components/custom comp/select';

function AnalysisName() {
    const [selectName, setselectName] = useState(null);
    const options = [
        { value: 'PA2', label: 'Basic Terrain Analysis' },
        { value: 'PA3', label: 'Surface Characteristics' },
        { value: 'PA4', label: 'Hydrological Analysis' },
        { value: 'PA5', label: 'Wetness & Erosion Indices' },
        { value: 'PA6', label: 'Visibility Analysis' },
        { value: 'PA7', label: 'Solar & Enviromental Analysis' },

    ];

    return (
        <div className='relative z-50 p-4 scale-80'>
            <Select
                label="Choose Analysis Type"
                options={options}
                value={selectName}
                onChange={(newValue) => setselectName(newValue)}
                placeholder="Select Analysis Name" />

            {selectName && (
                <p className="mt-4 text-sm text-gray-600">
                    You selected: <span className="font-bold">{selectName}</span>
                </p>
            )}


        </div>
    );

}
export default AnalysisName;