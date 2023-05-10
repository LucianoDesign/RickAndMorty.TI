import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav, removeAll } from "../../redux/actions";
import { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa";

export  function Card(props) {
  const {
    id,
    name,
    status,
    species,
    origin,
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
  const handleClose = (id) => {
    onClose(id);
    removeFav(id);
  };
  return (
    <div className={styles.divCardContainer}>
      <div className={styles.divCardContent}>
        {/* <button onClick={onClose}>X</button> */}
        {isFav ? (
          <button onClick={handleFavorite}><FaHeart color="red" size="24px"/></button>
        ) : (
          <button onClick={handleFavorite}><FaRegHeart color="black" size="24px"/></button>
        )}
        <div onClick={() => handleClose(id)} className={styles.containerSpin}>
          <div className={styles.closeIconSpin}></div>
        </div>
        <Link to={`detail/${id}`} className={styles.link}>
          <h3>{name}</h3>
        </Link>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
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