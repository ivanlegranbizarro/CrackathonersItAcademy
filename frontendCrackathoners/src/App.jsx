import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <SearchBar />
        </>
    );
}

export default App;
