import styled from 'styled-components';
import market from '../../../assets/images/market.png';
import fair from'../../../assets/images/fair.png'

const ContentCardDetails = styled.main`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(5px);
    z-index: 1; 
`;

const CardDetailsSection = styled.section`
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: auto;
    position: relative;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    z-index: 2; 
`;

const Header = styled.header`
    width: 65%;
    margin: 10px;
`;

const Title = styled.h2`
color: black;
`

const Aside = styled.aside`
    width: 35%;
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-between;

`;

const Image = styled.img`
    border-radius: 10px;
    margin: 10px;
    max-width: 90%; 
    height: 250px;
    object-fit: cover;
`;

const CardDetails = ({card,setOpenModal}) => {
    return (
        <ContentCardDetails onClick={()=>setOpenModal(false)}>
            <BlurBackground />
            <CardDetailsSection onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Image src={card.type==="Mercado"?market:fair} alt="foto_barri" /> 
                    <Title>{card.title}</Title>
                </Header>
                <Aside>
                    <div style={{lineHeight:"1rem"}}><h2>Tipo:</h2><p>{card.type}</p></div>

                    <div style={{lineHeight:"1rem"}}><h2>Dirección:</h2><p>{card.direction}, CP:{card.zip}</p></div>
                    <div style={{lineHeight:"1rem"}}><h2>Año de apertura:</h2><p>{card.year}</p></div>
                    <div style={{lineHeight:"1rem"}}><h2>Link Web:</h2><p>{card.link}</p></div>

                </Aside>
            </CardDetailsSection>       
        </ContentCardDetails>
    );
}

export default CardDetails;
