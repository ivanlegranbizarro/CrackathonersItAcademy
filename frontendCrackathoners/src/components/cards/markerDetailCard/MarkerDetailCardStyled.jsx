import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin: auto;
  margin-left: 2rem;
  z-index: 1000;
  height: 100%;
  background-color: var(--col-white);
  padding-left: 3rem;
  padding-top: 2rem;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  opacity: 95%;
  position: relative;
  @media only screen and (max-width: 801px) {
    width: 80%;
    box-sizing: border-box;
    bottom: 85px;
    position: fixed;
    margin: 0 11px;
    height: auto;
  }
`;

export const TitleCardText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--col-dark-green);
  margin-top: -1rem;
`;

export const CardText = styled.span`
  font-weight: normal;
  margin-left: 1rem;
`;

export const CloseButtonContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--col-black-green);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: var(--col-red);
  }
`;
