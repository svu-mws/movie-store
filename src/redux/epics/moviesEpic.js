import {switchMap, map} from 'rxjs/operators'
import {ajax} from "rxjs/ajax";
import {combineEpics, ofType} from "redux-observable";
import {GET_ALL_MOVIES, GET_ALL_MOVIES_FULFILLED} from "redux/actionTypes/moviesActionTypes";
import {SERVER_URL} from "redux/config";

// const rootRoute = `${SERVER_URL}/movies`;
const rootRoute = `http://www.mocky.io/v2/5cf62b213200005d308cd062`;
const fetchMoviesEpic = (action$) => action$.pipe(
    ofType(GET_ALL_MOVIES),
    switchMap(action =>
        ajax
            .getJSON(rootRoute)
            .pipe(
                map(movies => ({
                    type: GET_ALL_MOVIES_FULFILLED,
                    payload: movies
                }))
            )
    )
);

export default combineEpics(fetchMoviesEpic);
