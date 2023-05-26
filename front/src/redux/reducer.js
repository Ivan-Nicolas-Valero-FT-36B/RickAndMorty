import { CLEAN_DETAIL, GET_CHARACTER_DETAIL, GET_FAVORITES, GET_USERS, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
    characterDetail: {},
    users: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload}

        // case ADD_FAVORITE:
        //     return {...state, myFavorites:[...state.myFavorites, action.payload]};

        case REMOVE_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter(char=>char.id !== action.payload),};

        case GET_FAVORITES:
            return{
                ...state, myFavorites: action.payload
            }

        case GET_CHARACTER_DETAIL:
            return{
                ...state, characterDetail: action.payload,
            };

        case CLEAN_DETAIL:
            return{
                ...state, characterDetail: {},
            };

        default:
            return {...state};
    }
}

export default rootReducer;