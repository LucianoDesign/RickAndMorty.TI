import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        placeholder="Search..."
        value={id}
        onChange={handleChange}
      />
      <button onClick={handleClick} className={styles.button}>
        Agregar
      </button>
    </div>
  );
};