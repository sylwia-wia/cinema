import { combineReducers } from 'redux';
import RoomReducer from "./room/reducer";
import MovieReducer from "./movie/reducer";

const rootReducer = combineReducers({
    room: RoomReducer,
    movie: MovieReducer,
})

export default rootReducer;