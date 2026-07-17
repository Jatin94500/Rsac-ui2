

function RainfallAnomaly() {

    const generateDateOptions = () => {
        const options = [];
        const months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October", "November", "December"];

        for (let year = 2026; year >= 2015; year--) {
            for (let month of months) {
                options.push(`${month} ${year}`);
            }
        }
        return options;
    }
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 w-full">

            <div className="flex-justify-between items-center mb-4">
                <h2 className="text-base font-bold text-[#011d3c]">Rainfall Anomly </h2>
                <div className="flex gap-4 items-center">
                    <div className="flex  font-bold items-center gap-2">
                        <span className="text-xs text-grey-600">Month</span>
                        <select className="border border-gray-300 rounded-md text-xs p-1 outline-none cursor-pointer">
                            {generateDateOptions().map((date) => (<option key={date}>{date}</option>))}
                        </select>
                    </div>
                    <div className="flex font-bold items-center gap-2">
                        <span className="text-xs font-bold text-black-600">
                            Compared With
                        </span>
                        <select className="border border-gray-300 rounded-md text-xs p1 outline-none font-meedium cursor-pointer">
                            <option>Normal (1981-2010)</option>
                            <option>Normal (1991-2020)</option>
                            <option>Previous Year</option>
                            <option>Different Month (Year)</option>
                        </select>

                    </div>


                </div>

            </div>

            <div className="w-full h-30 rounded-lg overflow-hidden border border-gray-200 mb-3 bg-gray-100 flex items-center justify-center" >
                <img src="/download (3).webp" alt="Rainfall Anomaly Map" className="w-full h-full object-cover" />
            </div>


        </div>
    )
}
export default RainfallAnomaly