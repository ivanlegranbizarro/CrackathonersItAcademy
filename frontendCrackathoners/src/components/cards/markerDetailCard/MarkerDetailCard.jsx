import React from "react";
import { Container, TitleCardText, CardText } from "./MarkerDetailCardStyled";

const MarkerDetailCard = ({isOpen, category, name, district, address, creationDate, link}) => {

  if (!isOpen) return null;

  return (
    <Container>
      <TitleCardText>
      Categoria:
        <CardText>mercat setmanal {category} </CardText>
      </TitleCardText>
      <TitleCardText>
        Nom:
        <CardText>Mercat de Sant Gervasi {name} </CardText>
      </TitleCardText>
      <TitleCardText>
        Barri:
        <CardText>Sant Gervasi {district} </CardText>
      </TitleCardText>
      <TitleCardText>
      Adreça:
        <CardText>Sant Gervasi {address} </CardText>
      </TitleCardText>
      <TitleCardText>
      Creació:
        <CardText>1989 {creationDate} </CardText>
      </TitleCardText>
      <TitleCardText>
      Consulta horari:
        <CardText>link {link}</CardText>
      </TitleCardText>
    </Container>
  );
};

export default MarkerDetailCard;
