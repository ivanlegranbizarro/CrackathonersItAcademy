import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import React from "react";
import MarkerDetailCard from "../components/cards/markerDetailCard/MarkerDetailCard";

const mercatsData = [
  {
    id: 1,
    name: "Feria de Abril",
    coord_lat: "41.35329883597558",
    coord_lon: "2.149626569377951",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
    date_creation: "2002-06-12",
    schedule: "url",
  },
  {
    id: 2,
    name: "Feria de San Isidro",
    coord_lat: "41.3746514376551",
    coord_lon: "2.1781153021938913",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
    date_creation: "2002-06-12",
    schedule: "url",
  },
  {
    id: 3,
    name: "Feria 3",
    coord_lat: "41.382326716787425",
    coord_lon: "2.173576130337292",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
    date_creation: "2002-06-12",
    schedule: "url",
  },
  {
    id: 4,
    name: "Feria 4",
    coord_lat: "41.40014532869134",
    coord_lon: "2.122383312823837",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
    date_creation: "2002-06-12",
    schedule: "url",
  },
];

export const MapMarkets = () => {
  const [coordinates] = useState([41.3919, 2.1649]);
  const [markerDetailCard, setMarkerDetailCard] = useState({ isOpen: false });

  const handleMarkerClick = (marker) => {
    console.log("Marker clicked:", marker.name);
    setMarkerDetailCard({
      isOpen: true,
      selectedMarker: marker,
    });
  };
  return (
    <div style={{ margin: "50px" }}>
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {mercatsData.map((marker) => (
          <React.Fragment key={marker.id}>
            <Marker
              position={[Number(marker.coord_lat), Number(marker.coord_lon)]}
              eventHandlers={{
                click: () => handleMarkerClick(marker), // Register click event here
              }}
            />
            {markerDetailCard.isOpen &&
              markerDetailCard.selectedMarker?.id === marker.id && (
                <MarkerDetailCard
                  isOpen={markerDetailCard.isOpen}
                  category={marker.type}
                  name={marker.name}
                  district={marker.district}
                  address={marker.adress}
                  creationDate={marker.date_creation}
                  link={marker.schedule}
                />
              )}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};
