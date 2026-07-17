import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/Chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
function Body() {
    return (

        <div className="body-container flex gap-4 w-full px-2 mt-4 items-stretch">

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
    );
}
export default Body;