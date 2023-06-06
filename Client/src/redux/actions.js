import axios from "axios";
/*Types*/

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_ALL = "REMOVE_ALL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

/* Actions */
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeAll = (id) => {
  return { type: REMOVE_ALL, payload: id };
};
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
