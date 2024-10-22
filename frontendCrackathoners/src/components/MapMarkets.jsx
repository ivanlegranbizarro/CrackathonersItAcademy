import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";


const mercatsData = [
  {
    id: 1,
    name: "Feria de Abril",
    coord_lat: "41.35329883597558",
    coord_lon: "2.149626569377951",
  },
  {
    id: 2,
    name: "Feria de San Isidro",
    coord_lat: "41.3746514376551",
    coord_lon: "2.1781153021938913",
  },
  {
    id: 3,
    name: "Feria 3",
    coord_lat: "41.382326716787425", 
    coord_lon: "2.173576130337292"
  },
  {
    id: 4,
    name: "Feria 4",
    coord_lat: "41.40014532869134",
    coord_lon: "2.122383312823837"
  },
];

  export const MapMarkets = () => {
    const [coordinates] = useState([41.3919, 2.1649]);

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
          {mercatsData.map((marker) => (
          <Marker
            key={marker.id}
            position={[Number(marker.coord_lat), Number(marker.coord_lon)]}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
