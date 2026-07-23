import { ArrowUp } from "@untitledui/icons";

function Hidrologic() {
    const indicators = [
        { label: "Rainoff", unit: "mm", value: "12.6" },
        { label: "Evapotranspiration", unit: "mm", value: "5.7" },
        { label: "Infiltration", unit: "mm", value: "11" },
        { label: "Water Storage", unit: "%", value: "112" },
        { label: "Baseflow", unit: "mm", value: "60" }
    ];

    return (

        <div>
            <div className="text-2xl ">
                <span className="text-blue-800 font-bold">
                    Hydrologic Indicator(today)
                </span>
            </div>
            <div className="divide-y divide-gray-100 ">

                {indicators.map((item, index) => (
                    <div key={(index)} className="flex items-center justify-between py-2.5">
                        <span className="text-xl text-blue-600">
                            {item.label}{''}
                        </span>
                        <span className="text-xl text-blue-400">({item.unit})</span>

                        <div className="flex items-left space-x-1.5 font-semibold text-xl text-slate-900">
                            <span>{item.value}</span>
                            <span className="font-bold text-blue-500" aria-hidden="true"><ArrowUp className="w-5 h-5"/></span>
                        </div>


                    </div>
                ))}

            </div>

        </div>
    );
}
export default Hidrologic;