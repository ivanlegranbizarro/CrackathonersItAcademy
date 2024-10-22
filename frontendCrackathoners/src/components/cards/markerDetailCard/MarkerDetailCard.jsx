import React from "react";
import { Container, TitleCardText, CardText, CloseButtonContainer } from "./MarkerDetailCardStyled";

const MarkerDetailCard = ({ isOpen, category, name, district, address, creationDate, link, onClose }) => {

  if (!isOpen) return null;

  return (
    <Container>
      <CloseButtonContainer onClick={onClose}>
        <span style={{ color: 'white', cursor: 'pointer' }}>✖</span>
      </CloseButtonContainer>
      <TitleCardText>
        Categoria:
        <CardText> {category} </CardText>
      </TitleCardText>
      <TitleCardText>
        Nom:
        <CardText> {name} </CardText>
      </TitleCardText>
      <TitleCardText>
        Barri:
        <CardText>{district} </CardText>
      </TitleCardText>
      <TitleCardText>
        Adreça:
        <CardText> {address} </CardText>
      </TitleCardText>
      <TitleCardText>
        Creació:
        <CardText> {creationDate} </CardText>
      </TitleCardText>
      <TitleCardText>
        Consulta horari:
        <CardText> {link}</CardText>
      </TitleCardText>
    </Container>
  );
};

export default MarkerDetailCard;
