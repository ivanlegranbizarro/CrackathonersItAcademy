import styled from "styled-components";

export const Container = styled.div `
    width: 85%;
    margin: auto;
    position: fixed;
    bottom: 0;
    z-index: 999;
    height: auto;
    background-color: var(--col-white);
    padding-left: 3rem;
    padding-top: 2rem;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    border-radius: 0.625rem;
    opacity: 85%;
`

export const TitleCardText = styled.p `
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--col-dark-green);
    margin-top: -1rem;
`
export const CardText = styled.span `
    font-weight: normal;
    margin-left: 1rem;
`