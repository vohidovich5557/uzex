import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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
    const [showModal, setShowModal] = useState(false);
  
    return (
      <div className="relative w-[100%] h-[100%]">
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
          <MapComponent setShowModal={setShowModal} />
        </MapContainer>
        {showModal && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center pointer-events-none">
            <div className="bg-white p-4 rounded-md">
              Press Command (Mac) or Control (Windows) to change zoom level
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const MapComponent: React.FC<{ setShowModal: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setShowModal }) => {
    const map = useMap();
  
    useEffect(() => {
      map.scrollWheelZoom.disable();
  
      const handleMouseOver = () => {
        setShowModal(true);
      };
  
      const handleMouseOut = () => {
        setShowModal(false);
      };
  
      map.on('mouseover', handleMouseOver);
      map.on('mouseout', handleMouseOut);
  
      return () => {
        map.off('mouseover', handleMouseOver);
        map.off('mouseout', handleMouseOut);
      };
    }, [map, setShowModal]);
  
    return null;
  };

export default MyMap;
