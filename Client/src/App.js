import "./App.css";
import "../src/helpers/Routes.helper";
import { useState , useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import PathRoutes from "../src/helpers/Routes.helper";
/*Components */
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";


function App() {
  const [characters, setCharacters] = useState([]);
  /*Acceso al home*/  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1Password';
  const location = useLocation();
  const isForm = location.pathname === '/';
  
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
    if (characters.find((char) => char.id === id)) {
      window.alert("Este personaje ya está en la lista");
      return;
    }
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({ data }) => {
    
      setCharacters((oldChars) => [...oldChars, data]);
      
  })
  .catch((error) => {
    console.log(error);
    window.alert("¡No hay personajes con este ID!");
  });
      
  };
  const onClose = (id) => {
    /* const parsedId = parseInt(id); */
    console.log(id)
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    console.log("Characters:", characters);
  }, [characters]);

  return (

    <div className="App">

      {!isForm && <Nav logout = {logout}/>}
      <Routes>
      <Route path="/" element={<Form login = {login}/>}/>
      <Route path={PathRoutes.ABOUT} element={<About />}/>
      <Route path={PathRoutes.FAVORITES} element={<Favorites onClose={onClose}/>}/>
      <Route path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
      <Route path={PathRoutes.DETAIL} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
