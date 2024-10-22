import { MapMarkets } from "./components/MapMarkets.jsx";
import MarkerDetailCard from "./components/cards/markerDetailCard/MarkerDetailCard.jsx";
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
    <Navbar/>
      <h1>Hello World!</h1>
      <MapMarkets />
      <MarkerDetailCard />
    </>
  );
}

export default App;
