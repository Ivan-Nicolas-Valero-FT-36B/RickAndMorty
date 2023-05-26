import axios from "axios";

//export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_USERS = "GET_USERS";
export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = () => {
    return async function (dispatch) {
        const urlBase = "http://localhost:3001";
        const response = await axios.get(`${urlBase}/rickandmorty/fav`) 
        dispatch({type: GET_FAVORITES,payload: response.data})
    }
}

// export const addFavorite = (character) => {
//     return {type: ADD_FAVORITE, payload: character};
// };

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id};
};

export const getCharacterDetail = (id) => {
    return function (dispatch) {
        const urlBase = "http://localhost:3001";
        //const urlBase = "https://rickandmortyapi.com/api";
        fetch(`${urlBase}/detail/${id}`)
        .then((response) => response.json())
        .then(data=>dispatch({type: GET_CHARACTER_DETAIL, payload: data}));
    };
}

export const cleanDetail = () => {
    return {type: CLEAN_DETAIL};
};

export const getUsers = () => {
    return function (dispatch) {
        return fetch ("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_USERS, payload: data}));
    }
}
