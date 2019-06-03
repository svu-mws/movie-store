import {List} from "immutable";
import {GET_ALL_GENRES} from "redux/actionTypes/genresActionTypes";

export default function genresReducer(state = List(), action) {
    switch (action.type) {
        case GET_ALL_GENRES:
            return action.payload;
        default:
            return state;
    }
}