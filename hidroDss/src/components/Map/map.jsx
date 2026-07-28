import React, { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat, toLonLat } from 'ol/proj';
import 'ol/ol.css';

// Configuration - UPDATE THESE
const GEOSERVER_URL = 'http://localhost:5000/geoserver'; // Point to Express
const WORKSPACE = 'village_data';
const LAYER_NAME = 'data'; // The name of your village layer
const LAYER_FULL_NAME = `${WORKSPACE}:${LAYER_NAME}`;

const VillageMap = () => {
    const mapElement = useRef();
    const mapInstance = useRef();
    const popupElement = useRef();

    // State for selected feature info
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [popupPosition, setPopupPosition] = useState(null);

    // 1. Legend URL Construction
    const legendUrl = `${GEOSERVER_URL}/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${LAYER_FULL_NAME}`;

    useEffect(() => {
        if (mapInstance.current) return;

        // 2. Setup Map Layers
        const wmsSource = new TileWMS({
            url: `${GEOSERVER_URL}/${WORKSPACE}/wms`,
            params: {
                'LAYERS': LAYER_FULL_NAME,
                'TILED': true,
                'VERSION': '1.1.1',
            },
            serverType: 'geoserver',
        });

        const villageLayer = new TileLayer({
            source: wmsSource,
        });

        // 3. Initialize Map
        const map = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({ source: new OSM() }), // Base map
                villageLayer
            ],
            view: new View({
                center: fromLonLat([80.9462, 26.8467]), // Center on your area (e.g., Lucknow)
                zoom: 10,
            }),
        });

        // 4. Click Handler for Feature Info (Interactivity)
        map.on('singleclick', async (evt) => {
            const viewResolution = map.getView().getResolution();

            // Generate the URL for GetFeatureInfo
            const url = wmsSource.getFeatureInfoUrl(
                evt.coordinate,
                viewResolution,
                'EPSG:3857',
                { 'INFO_FORMAT': 'application/json' } // Request JSON data
            );

            if (url) {
                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    if (data.features && data.features.length > 0) {
                        const feature = data.features[0]; // Get the first hit
                        setSelectedFeature(feature.properties); // Save properties (Name, Pop, etc.)
                        setPopupPosition(evt.coordinate); // Save click location for popup
                    } else {
                        setSelectedFeature(null); // Clicked on empty space
                    }
                } catch (error) {
                    console.error("Error fetching feature info:", error);
                }
            }
        });

        // 5. Popup Overlay Setup
        const popup = new Overlay({
            element: popupElement.current,
            positioning: 'bottom-center',
            stopEvent: true,
            offset: [0, -10],
            autoPan: {
                animation: {
                    duration: 250,
                },
                margin: 20,
            },
        });
        map.addOverlay(popup);
        mapInstance.current = { map, popup };

    }, []);

    // Effect to update popup position when state changes
    useEffect(() => {
        if (mapInstance.current && popupPosition) {
            mapInstance.current.popup.setPosition(popupPosition);
        } else if (mapInstance.current) {
            mapInstance.current.popup.setPosition(undefined); // Hide popup
        }
    }, [popupPosition, selectedFeature]);

    return (
        <div className="relative w-full h-[650px] border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-8">

            {/* Map Container */}
            <div ref={mapElement} className="w-full h-full" />

            {/* Floating Legend Box */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl z-10 max-w-xs border border-gray-100">
                <h4 className="font-bold mb-3 text-gray-800 text-sm tracking-wide uppercase">Village Legend</h4>
                <img src={legendUrl} alt="Map Legend" className="border border-gray-200 rounded" />
                <p className="text-[10px] text-gray-400 mt-3 leading-tight">
                    * Legend updates automatically from GeoServer.
                </p>
            </div>

            {/* Popup Overlay */}
            <div 
                ref={popupElement} 
                className={`bg-white rounded-xl shadow-2xl border border-gray-200 w-[280px] flex-col ${selectedFeature ? 'flex' : 'hidden'}`}
                style={{ maxHeight: '380px' }}
            >
                {selectedFeature ? (
                    <div className="flex flex-col h-full w-full p-5 overflow-hidden">
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-gray-100 pb-3 mb-3 shrink-0">
                            <h3 className="font-bold text-gray-800 text-lg truncate">
                                {selectedFeature.VILLAGE_NAME || "Village Details"}
                            </h3>
                            <button 
                                onClick={() => { setSelectedFeature(null); setPopupPosition(null); }} 
                                className="text-gray-400 hover:text-red-500 transition-colors ml-3 p-1"
                            >
                                ✖
                            </button>
                        </div>
                        
                        {/* Scrollable Attributes List */}
                        <div className="overflow-y-auto flex-1 pr-2 space-y-3 custom-scrollbar">
                            {Object.entries(selectedFeature).map(([key, value]) => (
                                key !== 'bbox' && (
                                    <div key={key} className="break-words">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                                            {key.replace(/_/g, ' ')}
                                        </span>
                                        <span className="text-sm text-gray-800 font-medium leading-snug">
                                            {value !== null && value !== undefined && value !== '' ? String(value) : '-'}
                                        </span>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

        </div>
    );
};

export default VillageMap;
