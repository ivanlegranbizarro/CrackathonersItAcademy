import { useState } from "react";
import Card from "./components/Card/Card";
import CardDetails from "./components/CardDetails/CardDetails";
import styled from "styled-components";
import Navbar from './components/navbar/Navbar'
import list from './mocks/ferias.json'


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cardSelected, setCardSelected] = useState({});


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
      <Navbar/>
      <main>
        <ContentCards>
          {list.map(card => (
            <DivCards key={card.id} onClick={() => {
              setOpenModal(true);
              setCardSelected(card);
            }} >
              <Card card={card} />
            </DivCards>
          ))}
        </ContentCards>

        {openModal && <CardDetails card={cardSelected} setOpenModal={setOpenModal} />}
      </main>
    </>
  );
}

export default App;
