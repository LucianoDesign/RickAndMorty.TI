import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import {connect} from 'react-redux';

export  function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    onClose,
    addFav,
    removeFav,
    myFavourites
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavourites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavourites, id]);


  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }
    if (!isFav) {
      setIsFav(true);
      addFav(props);
    }
  };
  return (
    <div className={styles.divCardContainer}>
      <div className={styles.divCardContent}>
        {/* <button onClick={onClose}>X</button> */}
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
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

export function mapStateToProps(state) {
  return {
    myFavourites: state.myFavourites
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);