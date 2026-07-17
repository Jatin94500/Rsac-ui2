import TimeSeries from "../charts/TimeSeries";
import Map from "../Map/map";
import "./body.css";
import Datasetsummary from "../DatasetSummary/datasetsummary";
import Chrips from "../chirps/chrips"
import Rainfall from "../RainfallStatistics/Rainfall"
import RainfallAnomaly from "../RainfallAnomaly/RainfallAnomaly"
import Upperbar from "../upperbar/upperbar"
function Body() {
    return (
        <div className="body-container w-full px-2 mt-2">
            {/* Upperbar — full width on top */}
            <section className="mb-4"><Upperbar /></section>

            {/* Two-column layout */}
            <div className="flex gap-4 items-start">
                {/* LEFT: Chrips form + Map stacked */}
                <div className="flex gap-4 w-1/2">
                    <div className="w-fit">
                        <Chrips />
                    </div>
                    <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-2 pt-1 flex-1 h-[700px]">
                        <Map />
                    </section>
                </div>

                {/* RIGHT: Charts stacked */}
                <div className="flex flex-col flex-1 gap-4">
                    <div className="flex gap-4 w-full">
                        <section className="w-1/2 h-full">
                            <TimeSeries />
                        </section>
                        <section className="w-1/2 h-full">
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