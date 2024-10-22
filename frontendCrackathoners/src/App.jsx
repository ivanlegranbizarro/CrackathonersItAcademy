import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            {/*MAPA*/}
            <SearchBar />
        </>
    );
}

export default App;
