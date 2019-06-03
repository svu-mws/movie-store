import {combineEpics} from "redux-observable";
import moviesEpic from "redux/epics/moviesEpic"
import genresEpic from "redux/epics/genresEpic";

export default combineEpics(
    moviesEpic,
    genresEpic
);