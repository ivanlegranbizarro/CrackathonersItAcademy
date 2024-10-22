import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import React from "react";
import MarkerDetailCard from "../cards/markerDetailCard/MarkerDetailCard";
import {
  MapContainerStyled,
  TextStyle,
  MapSection,
  MainMapSection,
} from "./MapMarketsStyled";

import L from "leaflet";
import defaultIconUrl from "../../assets/images/geo-location-icon.svg";
import selectedIconUrl from "../../assets/images/geo-location-icon-selected.svg";

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

const defaultIcon = L.icon({
  iconUrl: defaultIconUrl,
  iconSize: [65, 81],
  iconAnchor: [32.5, 81],
});

const selectedIcon = L.icon({
  iconUrl: selectedIconUrl,
  iconSize: [65, 81],
  iconAnchor: [32.5, 81],
});

export const MapMarkets = () => {
  const [coordinates] = useState([41.3919, 2.1649]);
  const [markerDetailCard, setMarkerDetailCard] = useState({ isOpen: false });
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    console.log("Marker clicked:", marker.name);
    setSelectedMarker(marker);
    setMarkerDetailCard({
      isOpen: true,
      selectedMarker: marker,
    });
  };
  const handleCloseDetailCard = () => {
    setMarkerDetailCard({ isOpen: false, selectedMarker: null });
    setSelectedMarker(null);
  };

  return (
    <MainMapSection>
      <TextStyle>Mapa interactiu per als comerços locals</TextStyle>
      <MapContainerStyled>
        <MapSection>
          <MapContainer
            center={coordinates}
            zoom={11}
            style={{ height: "65vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {mercatsData.map((marker) => (
              <React.Fragment key={marker.id}>
                <Marker
                  position={[
                    Number(marker.coord_lat),
                    Number(marker.coord_lon),
                  ]}
                  icon={selectedMarker === marker ? selectedIcon : defaultIcon}
                  eventHandlers={{
                    click: () => handleMarkerClick(marker),
                  }}
                />
              </React.Fragment>
            ))}
          </MapContainer>
        </MapSection>

        {markerDetailCard.isOpen && (
          <MarkerDetailCard
            isOpen={markerDetailCard.isOpen}
            category={markerDetailCard.selectedMarker.type}
            name={markerDetailCard.selectedMarker.name}
            district={markerDetailCard.selectedMarker.district}
            address={markerDetailCard.selectedMarker.adress}
            creationDate={markerDetailCard.selectedMarker.date_creation}
            link={markerDetailCard.selectedMarker.schedule}
            onClose={handleCloseDetailCard}
          />
        )}
      </MapContainerStyled>
    </MainMapSection>
  );
};
