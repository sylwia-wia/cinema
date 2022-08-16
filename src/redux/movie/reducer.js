import {CREATE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "./actions";

const MovieReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MOVIE:
            let id = 1;

            if (Object.keys(state).length > 0) {
                const ids = Object.keys(state).map(id => parseInt(id))
                id = Math.max(...ids) + 1
            }

            const roomData = action.payload;

            roomData.movieID = id;

            return {
                ...state,
                [roomData.movieID]: roomData,
            };

        case UPDATE_MOVIE:
            const updateData = action.payload;

            return{
                ...state,
                [updateData.movieID]: {...updateData}
                };

        case DELETE_MOVIE:
            delete state[action.payload];
            return { ...state };

        default: return state;
    }
}
export default MovieReducer;