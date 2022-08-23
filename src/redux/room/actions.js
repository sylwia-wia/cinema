import {IDGenerator} from "../show/actions";

export const CREATE_ROOM = 'room/create';
export const UPDATE_ROOM = 'room/update';
export const DELETE_ROOM ='room/delete';

export const createRoom = (state, payload) => {
    payload.roomID = IDGenerator('room', state);

    return {
            type: CREATE_ROOM,
            payload: payload,
        }
}