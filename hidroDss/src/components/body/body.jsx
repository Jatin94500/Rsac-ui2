import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";

function Body() {
    return (

        <div className="flex">

            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 w-l lg:w-2/3 h-[500px]" >
                <Map />

            </section>
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl py-6 px-6 w-full h-full">
                <TimeSeries />
            </section>
            <section>
                <Datasetsummary />
            </section>











        </div>
    );
}
export default Body;