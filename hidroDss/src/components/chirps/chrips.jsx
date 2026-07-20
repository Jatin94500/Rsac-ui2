import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import Crop32Icon from "@mui/icons-material/Crop32";
function Chrips() {
  // Handle radio change

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="font-medium text-blue-800 text-xl mb-4">
        CHIRPS Rainfall
      </h1>

      <form>
        <div className="mb-3">
          <label className="block text-xl font-medium text-blue-800">
            Variable
          </label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="Daily Rainfall (mm)"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xl font-medium text-blue-800">
            Date
          </label>
          <input type="date" className="border rounded w-full p-2" />
        </div>

        <div className="mb-3">
          <label className="block  text-xl font-medium text-blue-800">
            Time Step
          </label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="Daily"
          />
        </div>

        <div className="mb-3">
          <label className="block  text-xl font-medium mb-1 text-blue-800">
            Visualisation
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input className='w-6 h-6 accent-blue-600 ' type="radio" name="visualization" value="Map" />
              Map
            </label>
            <label className="flex items-center gap-1">
              <input className='w-6 h-6 accent-blue-600' type="radio" name="visualization" value="Time Series" />
              Time Series
            </label>
            <label className="flex items-center gap-1">
              <input className='w-6 h-6 accent-blue-600 ' type="radio" name="visualization" value="Statistics" />
              Statistics
            </label>
          </div>
        </div>

        <div className="mb-3  rounded-b-md">
          <label className="block text-xl font-medium text-sm  text-blue-800">
            Color Scale
          </label>
          <div className="border border-gray-700 rounded-md ">
            <h1 className="flex  pl-4 p-2 border border-b-gray-700">
              <p>Rainfall(mm) </p>
              <p className= "ml-[70%] "><ArrowDropDownTwoToneIcon /></p>
            </h1>
            <p className="ml-6 text-xl ">
              
              <Crop32Icon  className="[&>path]:fill-amber-400 "/> {">"} 100 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 75-100 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 50-75 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 25-50 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 10-25 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 5-10 mm
            </p>
            <p className="ml-6 text-xl ">
              <Crop32Icon /> 5-1 mm
            </p>
            <p className="ml-6 ">
              <Crop32Icon /> 0-1 mm
            </p>
             <p className="ml-6 "><Crop32Icon/> No Data</p>
          </div>
        </div>

        <div className="flex gap-20">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Apply
          </button>
          <button
            type="button"
            className="border border-gray-500 px-6 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chrips;
