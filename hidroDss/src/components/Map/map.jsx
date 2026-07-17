import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationPinIcon from '@mui/icons-material/LocationPin';

function Map() {
    const position = [26.8467, 80.9462]
    return (
        <div className="w-full h-full rounded-xl overflow-hidden z-0">
            <MapContainer center={position} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
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