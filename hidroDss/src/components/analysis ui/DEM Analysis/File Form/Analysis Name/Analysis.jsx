import React, { useState } from 'react';

import Select from '@/components/custom comp/select';

function Analysis() {
    const [selectName, setselectName] = useState(null);
    const options = [
        { value: 'P2', label: 'Roughness' },
        { value: 'P3', label: 'TRI(Terrain Ruggedness Index)' },
        { value: 'P4', label: 'TPI(Topographic Position Index)' },
        { value: 'P5', label: 'Ruggedness Number' },
        { value: 'P6', label: 'Surface Area' },
        { value: 'P7', label: 'Valley Depth' },
        { value: 'P8', label: 'Relative Elevation Model(Rem)' },
        { value: 'P9', label: 'Terrain Classification' },
        { value: 'P10', label: 'Ridge Detection' },
        { value: 'P11', label: 'Valley Detection' },
        { value: 'P12', label: 'Peak Detection' },
        { value: 'P13', label: 'Saddle Detection' },



    ];

    return (
        <div className='relative z-40 p-4 scale-80'>
            <Select
                label="Choose Analysis Name"
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
export default Analysis;