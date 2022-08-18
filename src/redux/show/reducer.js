import {CREATE_SHOW} from "./actions";

const ShowReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHOW:
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        default: return state;
    }
}

export default ShowReducer;
