import TimeSeries from "../charts/TimeSeries";
import "./body.css";

function Body() {
    return (
        <div className="flex">
            <section className="bg-white border border-slate-200 shadow-sm rounded-xl py-12 px-6 max-w-5xl mx-auto my-8"><TimeSeries /></section>




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