import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose, onSearch } = props;
  const handleClick = () => {
    let randomNumber;
    const usedNumbers = characters.map((char) => char.id); 
    do {
      randomNumber = Math.round(Math.random() * 825) + 1;
    } while (usedNumbers.includes(randomNumber)); 
    onSearch(randomNumber);
  };
  return (
    <div className={styles.searchContent}>
      <div className={styles.homeSearch}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.glowOnHover} onClick={handleClick}>
          Random Search
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
