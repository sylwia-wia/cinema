import {CREATE_ROOM, DELETE_ROOM, UPDATE_ROOM} from "./actions";

const RoomReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            let id = 1;

            if (Object.keys(state).length > 0) {
                const ids = Object.keys(state).map(id => parseInt(id))
                id = Math.max(...ids) + 1
            }

            const roomData = action.payload;
            roomData.roomID = id;

            return {
                ...state,
                [roomData.roomID]: roomData,
            };

        case UPDATE_ROOM:
            const updateData = action.payload;
            return{
                ...state,
                [updateData.roomID]: {...updateData}
            };

        case DELETE_ROOM:
            delete state[action.payload];
            return { ...state };

        default: return state;
    }
}

export default RoomReducer;