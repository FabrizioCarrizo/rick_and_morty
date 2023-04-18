import { ADD_FAV, REMOVE_FAV } from "./actions";
const initialState = {
  myFavorites: [],
};

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, actions.payload],  };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: 
          state.myFavorites.filter((fav) => fav.id !== actions.payload),
        
      };

    default:
      return state;
  }
};
