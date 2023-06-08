import { connect, useDispatch } from "react-redux";
import React from "react";
import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";


export const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = React.useState(false);
  
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }


  return (
    <div className={styles.mainContainer}>
    <div className={styles.optionFilters}>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>      
      <div className={styles.favoriteDiv}>
      
        {myFavorites?.map((myFavorites) => (
          <Card
          
          key={myFavorites.id}
          name={myFavorites.name}
          id={myFavorites.id}
          species={myFavorites.species}
          gender={myFavorites.gender}
          image={myFavorites.image}
          addFav={props.addFav} // Pasa addFav desde props
          removeFav={props.removeFav} // Pasa removeFav desde props
          handleClose={props.handleClose} // Pasa handleClose desde props
          status={myFavorites.status}
          onClose={props.onClose}
            
          />
    
        ))}
      </div>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
