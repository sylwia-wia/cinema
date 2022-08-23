import { combineReducers } from 'redux';
import RoomReducer from "./room/reducer";
import MovieReducer from "./movie/reducer";
import ShowReducer from "./show/reducer";

const combinedReducers = combineReducers({
    room: RoomReducer,
    movie: MovieReducer,
    show: ShowReducer,
});

const rootReducer = (state, action) => {
    return combinedReducers(state,action);
}



export default rootReducer;