import styles from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


export default function Detail(){

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
          .then(({ data }) => {
            if (data.name) {
              setCharacter(data);
            } else {
              window.alert('No hay personajes con ese ID');
            }
          })
          .catch((error) => {
            console.log(error);
            setCharacter(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [id]);
      
      if (loading) {
        return <div>Cargando...</div>;
      }
      
      if (!character) {
        return <div>Error: No se pudo cargar el personaje</div>;
      }
      
      return (
        <div className={styles.detailContent}>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
          <div>
          <h2>Name: {character.name}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin.name}</h2>
          <h2>Character number {character.id}</h2>
          <h2>Shows up in {character.episode.length} {character.episode.length > 1 ? 'episodes' : 'episode'}</h2>
          
          <h2>Location: {character.location.name}</h2>
          
          
          </div>
        </div>
      );
}