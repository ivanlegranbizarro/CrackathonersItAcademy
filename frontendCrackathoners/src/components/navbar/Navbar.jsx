import React from "react";
import { NavbarStyled, LogoContainer, AppTitle } from "./NavbarStyled";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
    return (
        <NavbarStyled>
            <LogoContainer>
                <img src={Logo} alt="Imatge de logotip" />
            </LogoContainer>
            <AppTitle>MercAProp</AppTitle>
        </NavbarStyled>
    );
};

export default Navbar;
