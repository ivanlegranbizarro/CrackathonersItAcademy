import { useState } from "react";
import Card from "./components/Card/Card";
import CardDetails from "./components/CardDetails/CardDetails";
import styled from "styled-components";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cardSelected, setCardSelected] = useState({});

  const cardsData = [
    { id: 1, title: "Feria 1", type: "Feria", imgSrc: "https://www.abcfinanzas.com.ar/core/uploads/2019/01/feria.jpg", direction: "Calle Rodolfo", year: "1987" },
    { id: 2, title: "Feria 2", type: "Mercado", imgSrc: "https://www.abcfinanzas.com.ar/core/uploads/2019/01/feria.jpg", direction: "Calle Fausto", year: "2014" },
    { id: 3, title: "Feria 3", type: "Feria", imgSrc: "https://www.abcfinanzas.com.ar/core/uploads/2019/01/feria.jpg", direction: "Calle Miguel", year: "1998" }
  ];

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
      <main>
        <ContentCards>
          {cardsData.map(card => (
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
