/*Types*/

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_ALL = "REMOVE_ALL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

/* Actions */
export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
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
