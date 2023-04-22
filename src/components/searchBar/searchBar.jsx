import { useState } from "react";
import styles from "./SearchBar.module.css";

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
    <div className={styles.formGroup}>
      <input
        className={styles.formField}
        type="search"
        placeholder="Search.."
        value={id}
        onChange={handleChange}
      />
      <label  className={styles.formLabel}>Search ID</label>
      <button onClick={handleClick} className={styles.glowOnHover}>
        Agregar
      </button>
    </div>
  );
};