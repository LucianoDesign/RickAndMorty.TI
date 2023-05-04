import {ADD_FAV ,REMOVE_FAV} from "./actions"

const initialState = {
    myFavourites: [] ,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavourites:[...state.myFavourites, action.payload]};
        case REMOVE_FAV:
            return {...state, myFavourites: state.myFavourites.filter((char) => char.id !== parseInt(action.payload))};
        default:
            return{...state};
    }
}

export default rootReducer;