import {IDGenerator} from "../show/actions";
import {createAction} from "@reduxjs/toolkit";

export const createMovie = createAction('movie/create');
export const updateMovie = createAction('movie/update');
export const deleteMovie = createAction('movie/delete');

export const movieCreate = (state, payload) => {
    payload.movieID = IDGenerator('movie', state);
    return createMovie(payload);
}

