import {CREATE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "./actions";

const MovieReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MOVIE:
            return {
                ...state,
                [action.payload.movieID]: action.payload,
            };

        case UPDATE_MOVIE:
            return{
                ...state,
                [action.payload.movieID]: {...action.payload}
                };

        case DELETE_MOVIE:
            delete state[action.payload];
            return {
                ...state,
            }

        default: return state;
    }
}
export default MovieReducer;