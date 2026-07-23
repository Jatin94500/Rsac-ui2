

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
                <h2 className="text-2xl font-bold text-[#011d3c]">Rainfall Anomly </h2>
                <div className="flex gap-4 items-center">
                    <div className="flex   items-center gap-2">
                        <span className="text-2xl  font-bold text-grey-600">Month</span>
                        <select className="border  border-gray-300 rounded-md text-2xl p-1 outline-none cursor-pointer no-scrollbar">
                            {generateDateOptions().map((date) => (<option key={date}>{date}</option>))}
                        </select>
                    </div>
                    <div className="flex   items-center gap-2">
                        <span className="text-2xl font-bold text-black-600">
                            Compared With
                        </span>
                        <select className="border border-gray-300 rounded-md text-2xl p1 outline-none font-meedium cursor-pointer no-scrollbar">
                            <option>Normal (1981-2010)</option>
                            <option>Normal (1991-2020)</option>
                            <option>Previous Year</option>
                            <option>Different Month (Year)</option>
                        </select>

                    </div>


                </div>

            </div>

            <div className="w-full rounded-lg h-[15vh] border-gray-200 mb-3 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="/download (3).webp" alt="Rainfall Anomaly Map" className="w-full h-full object-contain" />
            </div>


        </div>
    )
}
export default RainfallAnomaly