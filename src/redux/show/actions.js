import moment from "moment/moment";
import {createAction} from "@reduxjs/toolkit";

export const createShow = createAction('show/create');
export const updateShow = createAction('show/update');
export const deleteShow = createAction('show/delete');
export const buyTicket = createAction('show/buy');

export const getMovieByID = (state, id) => state.movie[id];
export const getRoomByID = (state, id) => state.room[id];

export const showCreate = (state, payload) => {
    payload.showID = IDGenerator('show', state);
    payload = prepareShowData(state, payload);

    return createShow(payload);
}

export const showUpdate = (state, payload) => {
    payload = prepareShowData(state, payload);
    return updateShow(payload);
}

export const showDelete = (payload) => {
    return deleteShow(payload);
}

export const ticketBuy = (state, showID, seatID) => {
    const ticketID = Math.random().toString(36).substring(7);

    return buyTicket({
        showID,
        seatID,
        ticketID
    });
};

export function IDGenerator(entityName, state) {
    let id = 1;
    const IDs = Object.keys(state[entityName]).map(id => parseInt(id));

    if (Object.keys(state[entityName]).length > 0) {
        id = Math.max(...IDs) + 1;
    }

    if (isNaN(id)) {
        return 1;
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