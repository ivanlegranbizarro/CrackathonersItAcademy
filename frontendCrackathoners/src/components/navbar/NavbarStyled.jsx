import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 4.375rem;
  background-color: var(--col-white-green);
  background: linear-gradient(
    141deg,
    var(--col-white-green) 25%,
    var(--col-light-green) 70%,
    var(--col-dark-green) 84%,
    var(--col-green) 92%
  );
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`;
export const LogoContainer = styled.div`
  width: 3.5rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
export const AppTitle = styled.h1`
  color: var(--col-dark-green);
  margin-left: 5%;
`;
