import moment from "moment/moment";

export const CREATE_SHOW = 'show/create';
export const UPDATE_SHOW = 'show/update';
export const DELETE_SHOW = 'show/delete';
export const BUY_TICKET = 'show/buy';

export const getMovieByID = (state, id) => state.movie[id];
export const getRoomByID = (state, id) => state.room[id];

export const createShow = (state, payload) => {
    payload.showID = IDGenerator('show', state);
    payload = prepareShowData(state, payload);

    return {
        type: CREATE_SHOW,
        payload: payload
    };
}

export const updateShow = (state, payload) => {
    payload = prepareShowData(state, payload);

    return {
        type: UPDATE_SHOW,
        payload: payload
    };
}

export const deleteShow = (payload) => {
    return {
        type: DELETE_SHOW,
        payload: payload
    };
}

export const buyTicket = (state, showID, seatID) => {
    const ticketID = Math.random().toString(36).substring(7);

    return {
        type: BUY_TICKET,
        payload: {
            showID: showID,
            seatID: seatID,
            ticketID: ticketID
        }
    };
}

export function IDGenerator(entityName, state) {
    let id = 1;
    const IDs = Object.keys(state[entityName]).map(id => parseInt(id));

    if (Object.keys(state[entityName]).length > 0) {
        id = Math.max(...IDs) + 1;
    }
    return id;
}

function prepareShowData(state, payload) {
    const movie = getMovieByID(state, payload.movieID);
    const room = getRoomByID(state, payload.roomID);
    const dateTime = payload.dateTime;

    payload.movie = {
        title: movie.movieTitle,
        duration: movie.movieTime,
    };

    payload.room = {
        roomNumber: room.roomNumber,
        capacity: room.capacity,
    }


    payload.startTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    payload.endTime = moment(dateTime).add(movie.duration, 'minutes').format('YYYY-MM-DD HH:mm:ss');

    payload.seats = {};
    for (let i = 1; i <= room.capacity; i++) {
        payload.seats[i] = null;
    }

    return payload;
}