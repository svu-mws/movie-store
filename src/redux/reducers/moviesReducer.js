import {List} from 'immutable'
import {GET_ALL_MOVIES} from "redux/actionTypes/moviesActionTypes";

export default function moviesReducer(state = List(), action) {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return action.payload;
        default:
            return state;
    }
}