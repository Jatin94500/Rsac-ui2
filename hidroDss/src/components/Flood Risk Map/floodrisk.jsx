import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Floodrisk() {
    const defaultPosition = [26.8467, 80.9462];
    const defaultZoom = 6;

    const upFloodGeoData = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: { district: "Gorakhpur", riskLevel: "Very High", color: "#dc2626" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[[83.20, 26.65], [83.50, 26.65], [83.50, 26.90], [83.20, 26.90], [83.20, 26.65]]]
                }
            },
            {
                type: "Feature",
                properties: { district: "Prayagraj", riskLevel: "High", color: "#f97316" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[[81.75, 25.35], [82.05, 25.35], [82.05, 25.55], [81.75, 25.55], [81.75, 25.35]]]
                }
            }
        ]
    };

    const styleRiskZones = (feature) => {
        return {
            fillColor: feature?.properties?.color || "#ef4444",
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    };

    return (
        <div className="w-full h-full flex flex-col font-sans p-2 mr-[40%]">
            <h3 className="text-blue-900 font-bold text-2xl mb-3">Flood Risk Map (Today)</h3>

            <div className="flex flex-row gap-4 flex-1 mb-2">
                <div className="w-[55%] h-full rounded-lg overflow-hidden border border-slate-200">
                    <MapContainer
                        center={defaultPosition}
                        zoom={defaultZoom}
                        className="w-full h-full"
                        zoomControl={false}
                        dragging={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        <GeoJSON data={upFloodGeoData} style={styleRiskZones} />
                    </MapContainer>
                </div>

                <div className="w-[45%] flex flex-col justify-center space-y-3">
                    <div className="flex items-center space-x-3">
                        <span className="w-4 h-4 bg-red-600 rounded-sm"></span>
                        <span className="text-lg font-semibold text-slate-800">Very High</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="w-4 h-4 bg-orange-500 rounded-sm"></span>
                        <span className="text-lg font-semibold text-slate-800">High</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="w-4 h-4 bg-yellow-400 rounded-sm"></span>
                        <span className="text-lg font-semibold text-slate-800">Moderate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="w-4 h-4 bg-green-500 rounded-sm"></span>
                        <span className="text-lg font-semibold text-slate-800">Low</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="w-4 h-4 bg-green-300 rounded-sm"></span>
                        <span className="text-lg font-semibold text-slate-800">Very Low</span>
                    </div>
                </div>
            </div>

            <button className="mt-auto w-[70%] py-2 text-lg font-semibold text-blue-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                View Details
            </button>
        </div>
    );
}
