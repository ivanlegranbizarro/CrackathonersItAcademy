import styled from "styled-components";

export const MainMapSection = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const MapContainerStyled = styled.div`
  display: flex;
  @media only screen and (max-width: 801px) {
    flex-direction: column;
  }
`;

export const MapSection = styled.div`
  width: 60%;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 801px) {
    width: 100%;
  }
`;

export const TextStyle = styled.div`
  margin-block: 30px;
  border-bottom: 2px solid green;
  padding-bottom: 10px;


  @media only screen and (min-width: 601px) {
    font-size: 1.5rem;
    margin-block: 50px;
    border-bottom: 3px solid #238b45;
    padding-bottom: 20px;
  }
`;
