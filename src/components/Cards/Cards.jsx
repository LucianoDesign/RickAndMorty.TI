import { connect } from "react-redux";
import Card from '../Card/Card';
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Cards.module.css";
import { removeFav } from "../../redux/actions";


export function Cards(props) {
   const { characters, onClose , onSearch, myFavourites, removeFav} = props;
   const handleClick = () => {
    let randomNumber;
  const usedNumbers = characters.map(char => char.id); // Obtener la lista de IDs ya usados
  do {
    randomNumber = Math.round(Math.random() * 825) + 1;
  } while (usedNumbers.includes(randomNumber)); // Generar otro número si ya está en la lista
  onSearch(randomNumber);
  };
   return (
   <div>
    <div className={styles.homeSearch}>
    <SearchBar onSearch={onSearch} />
      <button className={styles.glowOnHover} onClick={handleClick}>
        Random Search
      </button>
    </div>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
          myFavourites={myFavourites}
          removeFav={removeFav}
        />
      ))}
   </div>
   );
}
function mapStateToProps(state) {
  return {
    myFavourites: state.myFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);