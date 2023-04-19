import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar"


export default function Nav(props) {
    const {onSearch} = props

    const handleClick = () => {
        let randomNumber = Math.floor(Math.random() * 826) + 1;
        onSearch(randomNumber);
      };

    return(
        <div className={styles.NavContent}>
         <SearchBar onSearch = {onSearch}/>
         <button className={styles.glowOnHover}onClick={handleClick}>Random Search</button>
        </div>
    )
}