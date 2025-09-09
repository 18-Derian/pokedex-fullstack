import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;