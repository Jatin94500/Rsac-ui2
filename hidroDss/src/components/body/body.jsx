import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
import Upperbar from "../upperbar/upperbar"
import Otherdata from "../Other Dataset/otherdata"
import Floodrisk from "../Flood Risk Map/floodrisk";
import Hidrologic from "../Hydrologic Indicator/Hydrologic_indicator";
import Recent_Alert from "../Recent Alert/Recent_Alert";





function Body() {





    return (

        <div className="overflow-auto mt-0 pt-0">
            <div>
                <section className="mb-2 h-[8vh]"><Upperbar /></section>
            </div>

            <div>
                <div className="body-container w-full px-2 mt-4 overflow-auto">




                    <div className="flex gap-4 items-start">
                        <div className="flex gap-4 w-[60%]">
                            <div className="w-1/3 h-full">
                                <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-1 h-[126vh]">
                                    <Chrips />
                                </section>
                            </div>

                            <div className="w-2/3">
                                <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full h-[126vh]">
                                    <Map />
                                </section>
                            </div>
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

                    <div className="flex flex-row gap-1 h-[100vh] mt-4 ">
                        <div className="w-[52%]">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-fit pr-2 h-[60vh] ml-2 mr-2">
                                <Otherdata />

                            </section>


                        </div>
                        <div className="w-[50%] ">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full pr-2 h-[60vh] pl-2 mr-2">
                                <Hidrologic className="" />

                            </section>

                        </div>
                        <div className="w-[50%]">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full pr-2 h-[60vh] ">
                                <Floodrisk />
                            </section>
                        </div>
                        <div className="w-[50%]">
                            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full pr-2 h-[60vh]">
                                <Recent_Alert />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div >



    );
}
export default Body;