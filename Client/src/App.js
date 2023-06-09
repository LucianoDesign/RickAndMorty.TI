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
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";



function App() {
  const [characters, setCharacters] = useState([]);
  /*Acceso al home*/  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const isForm = location.pathname === '/';
  
  const login = (userData) =>{
    const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
  }
  const logout = () =>{
    setAccess(false);
    navigate('/');
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);
/*Fin de Acceso al home*/ 
  const onSearch = async (id) => {
    
    if (characters.find((char) => char.id === Number(id))) {
      window.alert("Este personaje ya está en la lista");
      return;
    }
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      setCharacters((oldChars) => [...oldChars, data]);
      
    } catch (error) {
      
      window.alert("¡No hay personajes con este ID!");
    }
      
  };
  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  };

  

  return (

    <div className="App">
      <ParticleBackground />
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
