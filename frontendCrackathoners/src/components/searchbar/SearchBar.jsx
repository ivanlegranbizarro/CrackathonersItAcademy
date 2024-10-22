
import {
    SubmitIcon,
    Icon,
    SearchForm,
    Input,
    InputContainer,
} from "./SearchBarStyled";
import mapIcon from "../../assets/images/map-solid.svg";
import listIcon from "../../assets/images/list-solid.svg";
import searchIcon from "../../assets/images/magnifying-glass-solid.svg";

function SearchBar({isMap,setIsMap,query,setQuery}) {


    // Función de submit que previene comportamiento por defecto
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulario enviado con query:", query);
    }

    // Alternar vista de mapa/lista
    function toggleView() {
        setIsMap(!isMap);
    }


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
                        placeholder="Buscar"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                </InputContainer>

                <InputContainer>
                    <Icon
                        onClick={toggleView}
                        src={isMap ? listIcon : mapIcon}
                        alt=""
                    />
                </InputContainer>
            </SearchForm>
        </>
    );
}

export default SearchBar;
