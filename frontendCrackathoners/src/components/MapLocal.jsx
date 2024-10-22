import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from 'react';

export const MapLocal = () => {
  const [coordinatesX, setCoordinatesX] = useState (40.416775)
  const [coordinatesY, setCoordinatesY] = useState (-3.703790)
  const coordinates = [coordinatesX, coordinatesY]
  
  return (
    <div style={{margin: "50px"}}>
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={coordinates}>
          <Popup>Aquí está.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
