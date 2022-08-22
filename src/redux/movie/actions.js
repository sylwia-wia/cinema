import {IDGenerator} from "../show/actions";

export const CREATE_MOVIE = 'movie/create';
export const UPDATE_MOVIE = 'movie/update';
export const DELETE_MOVIE = 'movie/delete';

export const createMovie = (state, payload) => {
    payload.movieID = IDGenerator('movie', state);

    return {
        type: CREATE_MOVIE,
        payload: payload
    };
}

