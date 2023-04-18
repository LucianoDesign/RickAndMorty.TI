import './App.css';
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }
   
   return (
      <div className='App'>
         <Nav onSearch ={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
