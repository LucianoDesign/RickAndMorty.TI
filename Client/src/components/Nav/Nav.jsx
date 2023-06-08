import styles from "./Nav.module.css";
/* import { useState } from "react"; */
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as PowerOffIcon } from "../../assets/powerOff.svg";
import RickMortyLogo from "../../assets/RickMorty.png";

export default function Nav(props) {
  const { logout } = props;
  const location = useLocation();

  /* const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); */

  return (
    <div className={styles.navContent}>
      <div className={styles.navHome}>
        <Link to={"/home"}>
          <img alt="home" src={RickMortyLogo} className={styles.navImage} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to={"/home"} className={
            location.pathname === "/home" ? styles.activeLink : ""
          }>Home</Link>
        <Link to={"/about"} className={
            location.pathname === "/about" ? styles.activeLink : ""
          }>About</Link>
        <Link to={"/favorites"}  className={
            location.pathname === "/favorites" ? styles.activeLink : ""
          }>Favorites</Link>

        <PowerOffIcon
          className={styles.powerOffIcon}
          alt="Sign Out"
          onClick={logout}
        />
      </div>
    </div>
  );
}
