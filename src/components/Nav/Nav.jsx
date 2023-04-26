import styles from "./Nav.module.css";

import { NavLink } from "react-router-dom";

export default function Nav(props) {
  
const {logout} = props
 

  return (
    <div className={styles.NavContent}>
      
      <NavLink to={"/home"}>
        <button className={styles.glowOnHover}>Home</button>
      </NavLink>
      <NavLink to={"/about"}>
        <button className={styles.glowOnHover}>About</button>
      </NavLink>
      <button className={styles.glowOnHover} onClick={logout}>Log Out</button>
    </div>
  );
}
