import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import Upperbar from "../upperbar/upperbar"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
function Body() {
    return (
        <div>
            <div><Upperbar /></div>


            <div className="body-container flex gap-4 w-full px-2 mt-4 items-stretch">

                <div className="flex">

                    <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 w-l lg:w-2/3 h-[500px]"><Chrips /> </section>
                    <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 w-l lg:w-2/3 h-[500px]" >
                        <Map />

                    </section>
                    <section className="bg-white border border-slate-200 shadow-sm rounded-xl py-6 px-6 w-full h-full ">
                        <TimeSeries />
                    </section>
                    <section>
                        <Datasetsummary />
                    </section>
                    <section className=""><Rainfall /></section>
                    <section><RainfallAnomaly /></section>




                    <div className="w-1/2">
                        <section><Chrips /> </section>
                        <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 w-full h-[700px]" >
                            <Map />

                        </section>
                    </div>
                    <div className="flex flex-col flex-1 gap-4 pl-4">
                        <div className="flex gap-4 w-full">
                            <section className="w-1/2 h-full">
                                <TimeSeries />
                            </section>
                            <section className="w-1/2 h-full  ">
                                <Datasetsummary />
                            </section>
                        </div>

                        <section><Rainfall /></section>
                        <section><RainfallAnomaly /></section>

                    </div>




                </div>
            </div>
            );
}
            export default Body;