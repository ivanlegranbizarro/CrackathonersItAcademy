import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import styled from 'styled-components';


const mercatsData = [
  {
    id: 1,
    name: "Feria de Abril",
    coord_lat: "41.35329883597558",
    coord_lon: "2.149626569377951",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
  },
  {
    id: 2,
    name: "Feria de San Isidro",
    coord_lat: "41.3746514376551",
    coord_lon: "2.1781153021938913",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
  },
  {
    id: 3,
    name: "Feria 3",
    coord_lat: "41.382326716787425",
    coord_lon: "2.173576130337292",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
  },
  {
    id: 4,
    name: "Feria 4",
    coord_lat: "41.40014532869134",
    coord_lon: "2.122383312823837",
    type: "mercat",
    district: "Sant Gervasi",
    adress: "Verdaguer, 12",
  },
];

const MapContainerStyled = styled.div`
  width: 85%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 85%;
  }

  @media only screen and (min-width: 601px) {
    width: 85%;
  }
`;

export const MapMarkets = () => {
  const [coordinates] = useState([41.3919, 2.1649]);

  return (
    <MapContainerStyled>
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
          <Marker
            key={marker.id}
            position={[Number(marker.coord_lat), Number(marker.coord_lon)]}
          >
            <Popup>
              <p>{marker.type}</p>
              <p>{marker.name}</p>
              <p>{marker.district}</p>
              <p>{marker.adress}</p>t
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapContainerStyled>
  );
};
