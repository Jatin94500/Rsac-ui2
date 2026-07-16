import { MappContainer, Tilelayer, Marker, Popup } from 'reactt-leaflet'


function Map() {
    return (
        <div>
            <MappContainer center={position} ziim={6} scrolWheelZoom={true} className="leaflet-map">
                <Tilelayer attribution=''
        </MappContainer>

        </div>
    );
}