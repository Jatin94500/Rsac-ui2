import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";

function Body() {
    return (

        <div className="body-container">
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 w-[40%] h-full z-10" >
                <Map />
            </section>

            <section className="bg-white border border-slate-200 shadow-sm rounded-xl w-fit h-fit overflow-hidden ml-[1]">
                <TimeSeries />
            </section>

            <section className="bg-white border border-slate-200 shadow-sm rounded-xl w-[20%] h-fit overflow-hidden">
                <Datasetsummary />
            </section>











        </div>
    );
}
export default Body;