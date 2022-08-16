import {CREATE_SHOW} from "./actions";
import {getMovieByID, getRoomByID} from "../../utils/Selectors";
import moment from "moment/moment";

const ShowReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHOW:
            let id = 1;
            if (Object.keys(state).length > 0) {
                const ids = Object.keys(state).map(id => parseInt(id))
                id = Math.max(...ids) + 1
            }

            console.log(state);
            state.movie = state.movie.movieID;
            state.room =state.room.roomID;

            state.seats = {};
            for (let i = 1; i <= state.room.capacity; i++) {
                state.seats[i] = null;
            }

            state.startTime =  moment(state.showDate).format('YYYY-MM-DD HH:mm:ss');
            state.endTime = moment(state.showDate).add(state.movie.movieTime, 'minutes').format('YYYY-MM-DD HH:mm:ss');

            console.log(state.movie);
            const showData = action.payload;

            showData.showID = id;

            return {
                ...state,
            [showData.showID]: showData,
            };


        default: return state;
    }
}

export default ShowReducer;