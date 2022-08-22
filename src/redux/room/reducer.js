import {CREATE_ROOM, DELETE_ROOM, UPDATE_ROOM} from "./actions";

const RoomReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {
                ...state,
                [action.payload.roomID]: action.payload,
            };

        case UPDATE_ROOM:
            return{
                ...state,
                [action.payload.roomID]: {...action.payload}
            };

        case DELETE_ROOM:
            delete state[action.payload];
            return {
                ...state,
            }

        default: return state;
    }
}

export default RoomReducer;