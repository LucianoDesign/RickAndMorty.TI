import {ADD_FAV ,REMOVE_FAV, ORDER, FILTER, REMOVE_ALL} from "./actions"

const initialState = {
    myFavorites: [] ,
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case REMOVE_ALL:
            return {...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload)}
        case FILTER:
            const filterCopy = state.allCharacters.filter((char) => char.gender === action.payload);
            
            return {
                ...state,
                myFavorites: filterCopy,
            }
        case ORDER:
            const orderCopy = [...state.myFavorites];

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
                myFavorites: order
            }
        
        default:
            return state;
    }
}

export default rootReducer;