import styles from "./Card.module.css";

export default function Card(props) {
  const { id,name, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={styles.divCardContainer}>
      <div className={styles.divCardContent}>
        {/* <button onClick={onClose}>X</button> */}
        <div onClick={() => onClose(id)} className={styles.containerSpin}>
         <div className={styles.closeIconSpin}></div>
        </div>
        <h2>{name}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
