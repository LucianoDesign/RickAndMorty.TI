import styles from "./Nav.module.css";

import { NavLink } from "react-router-dom";

export default function Nav(props) {
  

 

  return (
    <div className={styles.NavContent}>
      
      <NavLink to={"/home"}>
        <button className={styles.glowOnHover}>Home</button>
      </NavLink>
      <NavLink to={"/about"}>
        <button className={styles.glowOnHover}>About</button>
      </NavLink>
    </div>
  );
}
