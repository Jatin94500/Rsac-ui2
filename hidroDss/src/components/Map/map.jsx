import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { useEffect } from 'react';

function ResizeMap() {
    const map = useMap();
    useEffect(() => {
        // Trigger a resize event to fix the "gray area" rendering bug
        setTimeout(() => {
            map.invalidateSize();
        }, 200);
    }, [map]);
    return null;
}

function Map() {
    const position = [26.8467, 80.9462]
    return (
        <div className="w-full h-full rounded-xl overflow-hidden z-0">
            <MapContainer center={position} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <ResizeMap />
                <TileLayer
                    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>

                    <Popup>
                        Lucknow, Uttar Pradesh. <br /> (This is where your data will go!)
                    </Popup>
                </Marker>

            </MapContainer>

        </div>
    );
}
export default Map;