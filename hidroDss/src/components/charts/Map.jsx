import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
  const [showPopup, setShowPopup] = useState(false);

  // Initial map state configuration
  const initialViewState = {
    longitude: -0.09,
    latitude: 51.505,
    zoom: 13,
    pitch: 45, // Tilts the map for a 3D perspective
    bearing: 0  // Rotates the map angle
  };

  // Open-source base map style URL (Protomaps baseline style)
  const mapStyleUrl = "https://openfreemap.org";

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map
        initialViewState={initialViewState}
        mapLib={maplibregl}
        mapStyle={mapStyleUrl}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Adds standard zoom and rotation controls UI */}
        <NavigationControl position="top-right" />

        {/* Custom Map Marker Component */}
        <Marker 
          longitude={-0.09} 
          latitude={51.505} 
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setShowPopup(true);
          }}
        >
          <div style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}>📍</div>
        </Marker>

        {/* Custom Map Popup Component */}
        {showPopup && (
          <Popup 
            longitude={-0.09} 
            latitude={51.505}
            anchor="top"
            onClose={() => setShowPopup(false)}
          >
            <div style={{ padding: '5px', color: '#000' }}>
              <h3>Vector Map Pin</h3>
              <p>Smoother zooming and 3D tilting!</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
