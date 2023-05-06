import {ADD_FAV ,REMOVE_FAV, ORDER, FILTER, REMOVE_ALL} from "./actions"

const initialState = {
    myFavourites: [] ,
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, 
                myFavourites:[...state.myFavourites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]};
        case REMOVE_FAV:
            return {...state,
                 myFavourites: state.myFavourites.filter((char) => char.id !== parseInt(action.payload))};
        case REMOVE_ALL:
            return {...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== parseInt(action.payload))}
        case FILTER:
            const filterCopy = [...state.allCharacters];
            const filter = filterCopy.filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavourites: filter,
            }
        case ORDER:
            const orderCopy = [...state.myFavourites];

            const order = orderCopy.sort((a,b)=>{
                if (action.payload === 'A'){
                    return a.id - b.id;
                  } else if (action.payload === 'D') {
                    return b.id - a.id;
                  } else {
                    return 0;
                  }
            });

            return {
                ...state,
                myFavourites: order
            }
        
        default:
            return state;
    }
}

export default rootReducer;