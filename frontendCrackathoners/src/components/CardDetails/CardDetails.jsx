import styled from 'styled-components';

const ContentCardDetails = styled.main`
    position: absolute;
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
    border: 2px solid black;
    border-radius: 15px;
    overflow: auto;
    position: relative;
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    z-index: 2; 
`;

const Header = styled.header`
    width: 50%;
`;

const Aside = styled.aside`
    width: 50%;
    text-align: start;
`;

const Image = styled.img`
    border-radius: 10px;
    margin: 10px;
    max-width: 90%; 
    height: auto;
    object-fit: cover;
`;

const CardDetails = ({card,setOpenModal}) => {
    return (
        <ContentCardDetails onClick={()=>setOpenModal(false)}>
            <BlurBackground />
            <CardDetailsSection onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Image src={card.imgSrc} alt="foto_barri" /> 
                    <h2 className='card-details-name'>Feria</h2>
                </Header>
                <Aside>
                    <h2>{card.type}</h2>
                    <h2>{card.direction}</h2>
                    <h3>{card.year}</h3>
                </Aside>
            </CardDetailsSection>       
        </ContentCardDetails>
    );
}

export default CardDetails;
