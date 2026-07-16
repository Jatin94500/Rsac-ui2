import TimeSeries from "../charts/TimeSeries";
import "./body.css";

function Body() {
    return (
        <div className="body-container">
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl py-6 px-6 w-full h-full"><TimeSeries />
            </section>


            {/* <section><Map/></section>
                    <section></section>
                    <section></section>
                    <section></section>
                    <section></section>
                    <section></section>
                    <section></section>
                    <section></section> */}
        </div>
    )
}
export default Body;