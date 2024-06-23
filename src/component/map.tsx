import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import custom icon images
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Coordinates for Bukhara, Uzbekistan
const position: [number, number] = [39.7747, 64.4286];

const MyMap: React.FC = () => {
    return (
        <MapContainer center={position} zoom={13} className="w-[100%] h-[100%] rounded-[30px] object-cover">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Bukhara, Uzbekistan. <br /> Lattico.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
