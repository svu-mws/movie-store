import {switchMap, map} from 'rxjs/operators'
import {ajax} from "rxjs/ajax";
import {combineEpics, ofType} from "redux-observable";
import {SERVER_URL} from "redux/config";
import {GET_ALL_GENRES} from "redux/actionTypes/genresActionTypes";

const rootRoute = `${SERVER_URL}/genres`;

const fetchGenresEpic = action$ => action$.pipe(
    ofType(GET_ALL_GENRES),
    switchMap(action =>
        ajax
            .getJSON(rootRoute)
            .pipe(
                map(genres => ({
                    type: action.type,
                    payload: genres
                }))
            )
    )
);

export default combineEpics(fetchGenresEpic);