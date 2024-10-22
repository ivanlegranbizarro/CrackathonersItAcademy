import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

const feriasData = [
  { id: 1, name: "Feria de Abril", coordinates: [37.3891, -5.9934] }, // Sevilla
  { id: 2, name: "Feria de San Isidro", coordinates: [40.4170, -3.7038] }, // Madrid
  { id: 3, name: "Feria de Málaga", coordinates: [36.7213, -4.4214] }, // Málaga
  { id: 4, name: "Feria de Valencia", coordinates: [39.4699, -0.3763] }, // Valencia
];


export const MapLocal = ({selectedFeria}) => {
  const [coordinatesX, setCoordinatesX] = useState(37.3891);
  const [coordinatesY, setCoordinatesY] = useState(-5.9934);
  const coordinates = [coordinatesX, coordinatesY];


  useEffect(() => {
    if (selectedFeria) {
      setCoordinatesX(coordinatesX)
      setCoordinatesY(coordinatesY)
    }
  }, [selectedFeria]);


  return (
    <div style={{ margin: "50px" }}>
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
