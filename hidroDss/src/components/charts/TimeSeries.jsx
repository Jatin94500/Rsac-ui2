import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Select } from "@/components/base/select/select";


function TimeSeries() {


    return (
        <div className="space-y-6 max-w-4xl mx-auto p-4">
      

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <BarChart
                    xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    height={300}
                />
            </div>
        </div>
    );
}

export default TimeSeries;
