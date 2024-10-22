import { useState, useEffect } from "react";
import "./SearchBar.css";
import styled from "styled-components";
import mapIcon from "../assets/images/map-solid.svg";
import listIcon from "../assets/images/list-solid.svg";
import searchIcon from "../assets/images/magnifying-glass-solid.svg";

function SearchBar() {
    const [isMap, setIsMap] = useState(false);
    const [query, setQuery] = useState("");

    // Styled components
    const SubmitIcon = styled.div`
        position: relative;
        width: 25px;
        height: 25px;

        * {
            position: absolute;
            top: 0;
            left: 0;
        }

        button {
            cursor: pointer;
            z-index: 1;
            width: 100%;
            height: 100%;
            background: none;
            border: none;
        }
    `;

    const Icon = styled.img`
        object-fit: contain;
        height: 25px;
        width: 25px;
    `;

    const SearchForm = styled.form`
        display: flex;
        flex-direction: row;
        column-gap: 15px;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: transparent;
    `;

    const Input = styled.input`
        display: block;
        background-color: transparent;

        &[type="text"] {
            color: white;
            border: none;
            border-bottom: 1px solid white;
            font-family: "Poppins", sans-serif;
            margin: 0px 15px;

            &:focus,
            &:visited,
            &:active {
                outline: none;
                border: none;
                border-bottom: 1px solid white;
            }
        }
    `;

    const InputContainer = styled.div`
        width: max-content;
        height: 100%;
        padding: 0px 25px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
    `;

    // Función de submit que previene comportamiento por defecto
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulario enviado con query:", query);
    }

    // Alternar vista de mapa/lista
    function toggleView() {
        setIsMap(!isMap);
    }

    useEffect(() => {}, [isMap]);

    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
                <InputContainer>
                    <SubmitIcon>
                        <Icon className="icon" src={searchIcon} alt="" />
                        <button type="button">
                            {" "}
                            {/* Cambiado a botón normal */}
                            <Icon src={searchIcon} alt="submit icon" />
                        </button>
                    </SubmitIcon>
                    <Input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                </InputContainer>

                <InputContainer>
                    <Icon
                        onClick={toggleView}
                        src={isMap ? mapIcon : listIcon}
                        alt=""
                    />
                </InputContainer>
            </SearchForm>
        </>
    );
}

export default SearchBar;
