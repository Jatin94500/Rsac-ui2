

function Chrips() {



  // Handle radio change


  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="font-medium text-blue-800 text-xl mb-4">CHIRPS Rainfall</h1>

      <form>

        <div className="mb-3">
          <label className="block text-sm font-medium text-blue-800">Variable</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="Daily Rainfall (mm)"
          />
        </div>


        <div className="mb-3">
          <label className="block text-sm font-medium text-blue-800">Date</label>
          <input
            type="date"
            className="border rounded w-full p-2"
          />
        </div>


        <div className="mb-3">
          <label className="block font-medium text-sm font-medium text-blue-800">Time Step</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            placeholder="Daily"
          />
        </div>


        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 text-blue-800">Visualisation</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="visualization"
                value="Map"
              />
              Map
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="visualization"
                value="Time Series"

              />
              Time Series
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="visualization"
                value="Statistics"

              />
              Statistics
            </label>
          </div>
        </div>

        <div className="flex gap-15">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Apply
          </button>
          <button type="button" className="border border-gray-500 px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chrips;