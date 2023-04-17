import axios from "axios";

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";

const addFav = (character) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
          console.log('POSTING ON AXIOS-->',data)
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         });
      };
   };

const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export { ADD_FAV, REMOVE_FAV, addFav, removeFav };
