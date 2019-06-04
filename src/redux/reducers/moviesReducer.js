import {List} from 'immutable'
import {GET_ALL_MOVIES_FULFILLED} from "redux/actionTypes/moviesActionTypes";

export default function moviesReducer(state = List(), action) {
    switch (action.type) {
        case GET_ALL_MOVIES_FULFILLED:
            return action.payload;
        default:
            return state;
    }
}
