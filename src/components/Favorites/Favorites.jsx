import { connect } from "react-redux";
import React from "react";
import styles from "./Favorites.module.css";
import Card from "../Card/Card";

export const Favorites = (props) => {
  const { myFavourites } = props;
  
  return (
    <>
      
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
