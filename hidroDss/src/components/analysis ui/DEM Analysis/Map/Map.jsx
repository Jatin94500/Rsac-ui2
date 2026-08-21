import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Legend from '@/components/Map/legend';

function DemMap() {
    const mapElement = useRef(null);

    useEffect(() => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [80.8, 27.1],
                zoom: 2
            }),
        });
        return () => {
            initialMap.setTarget(null);
        };
    }, []);


    return (
        <div
            ref={mapElement}
            className="relative w-full h-[75vh] rounded-xl overflow-hidden border border-slate-300 shadow-sm"
        >
            <Legend className="scale-95 origin-top-left mt-2 ml-2 h-[120%]" />
        </div>
    );
}
export default DemMap;
