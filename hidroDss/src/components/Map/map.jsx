import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationPinIcon from '@mui/icons-material/LocationPin';

function Map() {
    const position = [26.8467, 80.9462]
    return (
        <div className="w-full h-full rounded-xl overflow-hidden z-10">
            <MapContainer center={position} zoom={6} scrollWheelZoom={true} className="w-full h-full min-h-[400px]">
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