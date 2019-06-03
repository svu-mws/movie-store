import {switchMap, map} from 'rxjs/operators'
import {ajax} from "rxjs/ajax";
import {combineEpics, ofType} from "redux-observable";
import {GET_ALL_MOVIES} from "redux/actionTypes/moviesActionTypes";
import {SERVER_URL} from "redux/config";

const rootRoute = `${SERVER_URL}/movies`;


const fetchMoviesEpic = action$ => action$.pipe(
    ofType(GET_ALL_MOVIES),
    switchMap(action =>
        ajax
            .getJSON(rootRoute)
            .pipe(
                map(movies => ({
                    type: action.type,
                    payload: movies
                }))
            )
    )
);

export default combineEpics(fetchMoviesEpic);