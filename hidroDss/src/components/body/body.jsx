import "./body.css";
import React, { useState } from 'react'
import Upperbar from "../upperbar/upperbar";

import ChirpsRainfallUI from "../analysis ui/CHIRPS UI/ChirpsRainfallUI";


function Body() {

    const [activeTab, setActiveTab] = useState('CHIRPS Rainfall');


    return (

        <div className="overflow-auto mt-0 pt-0">
            <div>
                <section className="mb-2 h-auto"><Upperbar activeTab={activeTab} onTabSelect={setActiveTab} /></section>
            </div>
            <div>
                {activeTab === 'CHIRPS Rainfall' && <ChirpsRainfallUI />}
            </div>


        </div >



    );
}
export default Body;