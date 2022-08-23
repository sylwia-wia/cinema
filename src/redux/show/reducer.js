import {BUY_TICKET, CREATE_SHOW, DELETE_SHOW, UPDATE_SHOW} from "./actions";

const ShowReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHOW:
            return {
                ...state,
                [action.payload.showID]: action.payload,
            };
        case UPDATE_SHOW:
         return{
                ...state,
                [action.payload.showID]: action.payload,
            };
        case DELETE_SHOW:
            delete state[action.payload];

            return {
                ...state,
            }

        case BUY_TICKET:
            return {
                ...state,
                [action.payload.showID]: {
                    ...state[action.payload.showID],
                    seats: {
                        ...state[action.payload.showID].seats,
                        [action.payload.seatID]: action.payload.ticketID,
                    }
                }
            };


        default: return state;
    }
}

export default ShowReducer;
