import styles from "./Nav.module.css";
/* import { useState } from "react"; */
import { Link } from "react-router-dom";
import { ReactComponent as PowerOffIcon } from "../../assets/powerOff.svg";
import RickMortyLogo from "../../assets/RickMorty.png";

export default function Nav(props) {
  const { logout } = props;

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
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/favorites"}>Favorites</Link>

        <PowerOffIcon
          className={styles.powerOffIcon}
          alt="Sign Out"
          onClick={logout}
        />
      </div>
    </div>
  );
}
