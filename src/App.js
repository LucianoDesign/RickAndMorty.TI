import "./App.css";
import { useState } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
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
        console.log(data)
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
  const location = useLocation();
  const isForm = location.pathname === '/';

  return (

    <div className="App">

      {!isForm && <Nav />}
      <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
      <Route path="/home/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
