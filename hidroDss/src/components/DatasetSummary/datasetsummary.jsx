function Datasetsummary() {
    return (
        <div className='border rounded-xl bg-gradient-to-b from-white to-blue-50 h-full w-full flex flex-col justify-between shadow-sm'>
            <div className='border-b mx-4 border-gray-300 p-2 pb-4 pt-4'>
                <h1 className='text-xs text-blue-700 mb-4 font-bold'>Dataset Summary</h1>
                <h3 className='text-xs  font-bold'> Source</h3>
                <h2 className='font-bold'> CHIRPS v 2.0</h2>
            </div>
            <div className='border-b mx-4 border-gray-300    p-2 pb-4'>

                <h3 className='text-xs font-bold'> Temporal Coverage</h3>
                <h2 className='font-bold'>1981 - Present</h2>
            </div>
            <div className='border-b mx-4 border-gray-300    p-3 pb-4'>

                <h3 className='text-xs font-bold'> Spatial Resolution</h3>
                <h2 className='font-bold'>-5km</h2>

            </div>
            <div className='border-b mx-4 border-gray-300    p-3 pb-4'>

                <h3 className='text-xs font-bold'> Temporal Resolution</h3>
                <h2 className='font-bold'>Daily</h2>

            </div>
            <div className='border-b mx-4 border-gray-300    p-3 pb-4'>

                <h3 className='text-xs font-bold'> Source   <span className='bg-green-500 text-white rounded-sm '>Active</span></h3>
                <h2 className='font-bold whitespace-nowrap '> Last Updated <span> 10 Jun 2025</span></h2>
            </div>



        </div>
    );

}

export default Datasetsummary;