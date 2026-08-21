import React, { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import Legend from './legend';


const OpenLayerMap = () => {
    const mapElement = useRef(null);
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        // Prevent map from initializing multiple times in strict mode
        if (mapRef.current) return;

        // Initialize the OpenLayers Map
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(), // OpenStreetMap base layer
                }),
            ],
            view: new View({
                center: fromLonLat([80.9462, 26.8467]), // Default center (e.g., Lucknow)
                zoom: 8, // Default zoom level
            }),
        });

        mapRef.current = initialMap;
        setMap(initialMap);

        // Cleanup on unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.setTarget(undefined);
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div ref={mapElement} className="w-full h-full" />

            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl z-10 border border-gray-100">
                <h4 className="font-bold text-gray-800 text-sm">Map Legend</h4>
                <p className="text-xs text-gray-500 mt-1">OpenStreetMap Base Layer</p>
            </div>

            <Legend />
        </div>
    );
};

export default OpenLayerMap;
