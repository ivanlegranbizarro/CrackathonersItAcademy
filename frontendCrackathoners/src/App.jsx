import { useEffect, useState } from "react";
import Card from "../src/components/cards/Card/Card";
import CardDetails from "../src/components/cards/CardDetails/CardDetails";
import styled from "styled-components";
import list from './mocks/ferias.json'
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import { MapMarkets } from "../src/components/map/MapMarkets";
import useApi from "./services/useApi";

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

    const {mercatsData, error} = useApi("https://zesty-nurturing-production.up.railway.app/api/street_market")
    console.log(mercatsData)

    const ContentCards = styled.main`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        padding: 20px;
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
              {isMap ? <MapMarkets /> : <ContentCards>
                    {filteredCards.map((card) => (
                        <DivCards
                            key={card.id}
                            onClick={() => {
                                setOpenModal(true);
                                setCardSelected(card);
                            }}
                        >
                            <Card card={card} />
                        </DivCards>
                    ))}
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
