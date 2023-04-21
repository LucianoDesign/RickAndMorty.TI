import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const { onSearch } = props;

  const handleClick = () => {
    let randomNumber = Math.round(Math.random() * 825) + 1;
    onSearch(randomNumber);
  };

  return (
    <div className={styles.NavContent}>
      <SearchBar onSearch={onSearch} />
      <button className={styles.glowOnHover} onClick={handleClick}>
        Random Search
      </button>
      <NavLink to={"/about"}>
        <button className={styles.glowOnHover}>About</button>
      </NavLink>
      <NavLink to={"/home"}>
        <button className={styles.glowOnHover}>Home</button>
      </NavLink>
    </div>
  );
}
