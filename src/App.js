import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Routes, Route, useLocation} from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
/*Acceso al home*/  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1Password';

  const login = (userData) =>{
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
  }
  const logout = () =>{
    setAccess(false);
    navigate('/');
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);
/*Fin de Acceso al home*/ 
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
  const location = useLocation();
  const isForm = location.pathname === '/';

  return (

    <div className="App">

      {!isForm && <Nav logout = {logout}/>}
      <Routes>
      <Route path="/" element={<Form login = {login}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
      <Route path="/home/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
