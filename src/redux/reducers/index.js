import {combineReducers} from "redux";
import moviesReducer from "redux/reducers/moviesReducer"
import genresReducer from "redux/reducers/genresReducer";

export default combineReducers({
    "movies": moviesReducer,
    "genres": genresReducer
});