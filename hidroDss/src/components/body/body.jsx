import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
import Upperbar from "../upperbar/upperbar"
import Otherdata from "../Other Dataset/otherdata"





function Body() {
    return (

        <div className="overflow-auto mt-0 pt-0">
            <div>
                <section className="mb-2 h-[8vh]"><Upperbar /></section>
            </div>

            <div>
                <div className="body-container w-full px-2 mt-4 overflow-auto">




                    <div className="flex gap-4 items-start">

                        <div className="w-[20%] h-full">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-1 h-[126vh]">
                                <Chrips />
                            </section>
                        </div>

                        <div className="w-2/5">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full h-[126vh]">
                                <Map />
                            </section>
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full h-[40vh]">
                                <Otherdata />

                            </section>
                        </div>


                        <div className="flex flex-col flex-1 gap-4">
                            <div className="flex gap-4 w-full">
                                <section className="w-1/2 h-[65vh]">
                                    <TimeSeries className="h-fit" />
                                </section>
                                <section className="w-1/2 h-[65vh]">
                                    <Datasetsummary className="h-fit" />
                                </section>
                            </div>

                            <section><Rainfall /></section>
                            <section><RainfallAnomaly /></section>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    );
}
export default Body;