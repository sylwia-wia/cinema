import {IDGenerator} from "../show/actions";
import {createAction} from "@reduxjs/toolkit";

export const createRoom = createAction('room/create');
export const updateRoom = createAction('room/update');
export const deleteRoom = createAction('room/delete');

export const roomCreate = (state, payload) => {
    payload.roomID = IDGenerator('room', state);

    return createRoom(payload);
}