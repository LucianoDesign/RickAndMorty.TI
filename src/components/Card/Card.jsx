import styles from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card(props) {
  const { id,name, status, species, gender, image, onClose } = props;
  return (
    <div className={styles.divCardContainer}>
      <div className={styles.divCardContent}>
        {/* <button onClick={onClose}>X</button> */}
        <div onClick={() => onClose(id)} className={styles.containerSpin}>
         <div className={styles.closeIconSpin}></div>
        </div>
        <Link to={`detail/${id}`} className={styles.link}>
        <h3>{name}</h3>
        </Link>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* origin */}
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
