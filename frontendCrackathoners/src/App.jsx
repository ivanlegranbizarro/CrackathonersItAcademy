import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import CardDetails from "./components/CardDetails/CardDetails";
import styled from "styled-components";
import list from './mocks/ferias.json'
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";

function App() {

    const [openModal, setOpenModal] = useState(false);
    const [cardSelected, setCardSelected] = useState({});
    const [isMap,setIsMap]=useState(false);
    const [query, setQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState(list); 


    useEffect(() => {}, [isMap]);

    useEffect(() => {
        setFilteredCards(filteredList(query)); 
    }, [query]);

    const filteredList = (query) => {
        return list.filter(item => item.title.toLowerCase().includes(query.toLowerCase())); 
    };

    const ContentCards = styled.main`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    `;

    const DivCards = styled.div`
        width: 45%;
        max-width: 350px;
    `;

    return (
        <>
            <Navbar />
            <SearchBar isMap={isMap} setIsMap={setIsMap} query={query} setQuery={setQuery}/>
            <main>
              {isMap ? "Aqui va el mapa" : <ContentCards>
                    {list?filteredCards.map((card) => (
                        <DivCards
                            key={card.id}
                            onClick={() => {
                                setOpenModal(true);
                                setCardSelected(card);
                            }}
                        >
                            <Card card={card} />
                        </DivCards>
                    )):"No hem trobat dades"}
                </ContentCards>}
               

                {openModal && (
                    <CardDetails
                        card={cardSelected}
                        setOpenModal={setOpenModal}
                    />
                )}
            </main>
        </>
    );
}

export default App;
