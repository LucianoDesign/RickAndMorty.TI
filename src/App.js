import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const parsedId = parseInt(id);
    if (characters.find((char) => char.id === parsedId)) {
      window.alert("Este personaje ya está en la lista");
      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  const onClose = (id) => {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter(
      (character) => character.id !== parsedId
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
