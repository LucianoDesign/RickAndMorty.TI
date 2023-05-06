import { connect, useDispatch } from "react-redux";
import React from "react";
import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

export const Favorites = (props) => {
  const { myFavourites } = props;
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
    <>
    <div>
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
      
        {myFavourites?.map((myFavourites) => (
          <Card
          
            key={myFavourites.id}
            name={myFavourites.name}
            id={myFavourites.id}
            species={myFavourites.species}
            gender={myFavourites.gender}
            image={myFavourites.image}
            onClose={myFavourites.onClose}
            addFav={myFavourites.addFav}
            removeFav={myFavourites.removeFav}
            status={myFavourites.status}
            
          />
        ))}
      </div>
    </>
  );
};

export function mapStateToProps(state) {
  return {
    myFavourites: state.myFavourites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
