import moment from "moment/moment";

export const CREATE_SHOW = 'show/create';
export const UPDATE_SHOW = 'show/update';
export const DELETE_SHOW ='show/delete';


export const getMovies = (state) => Object.values(state.movie);
export const getMovieByID = (state, id) => state.movie[id];

export const getRooms = (state) => Object.values(state.room);
export const getRoomByID = (state,id) => state.room[id];



export const createShow = (state, payload) =>  {
    payload.id = IDGenerator('show', state);

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


    return {
        type: CREATE_SHOW,
        payload: payload
    };
}

export function IDGenerator(entityName, state) {
    let id= 1;
    const IDs = Object.keys(state[entityName]).map(id => parseInt(id));
    console.log(Object.keys(state[entityName]));

    if(Object.keys(state[entityName]).length > 0) {
        id = Math.max(...IDs) + 1;
    }
    return id;
}
