import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/Chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
function Body() {
    return (

        <div className="flex">
           
           <section><Chrips/> </section>
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 w-l lg:w-2/3 h-[500px]" >
                <Map />

            </section>
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl py-6 px-6 w-full h-full">
                <TimeSeries />
            </section>
            <section>
                <Datasetsummary />
            </section>
            <section><Rainfall/></section>
            <section><RainfallAnomaly/></section>











        </div>
    );
}
export default Body;