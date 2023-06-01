import styles from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});


  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)    
      .then(({ data }) => {
        console.log(data)
        if (data) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log(error);
        setCharacter(null);
      })
      
  }, [id]);

  
  
  const gender =
    character.gender === "Male"
      ? "His"
      : character.gender === "Female"
      ? "Her"
      : "Its";
  const pronoun =
    character.gender === "Male"
      ? "He"
      : character.gender === "Female"
      ? "She"
      : "It";

  return   (
    <div className={styles.detailContent}>
      <div className = {styles.detailImg}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.detailData}>
        <h2>{character.name}</h2>
        <ul>
          <li>
            {gender} id number is {character.id}
          </li>
          <li>
            {pronoun} is from {character.origin} and{" "}
            {character.origin && gender.toLowerCase()} current location is at{" "}
            {character.location}.
          </li>
          <li>
            {pronoun} is { character.status && character.status.toLowerCase()}{" "}
            {character.status === "Alive" ? "and a" : "and was"}{" "}
            {character.species && character.species.toLowerCase()}.
          </li>
          {/* <li>
            {pronoun} shows up in {character.episode.length}{" "}
            {character.episode.length > 1 ? "episodes" : "episode"}.
          </li> */}
        </ul>
      </div>
    </div>
  );
}
