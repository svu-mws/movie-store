import React, {useState} from 'react'
import FilteringTabs from "../FilterableMovies/FilteringTabs/FilteringTabs";
import GridMoviesList from "components/MoviesList/GridMoviesList";
import SliderMoviesList from "components/MoviesList/SliderMoviesList";
import {useSelector} from "react-redux";
import LinearMoviesList from "components/MoviesList/LinearMoviesList";

export const LayoutType = Object.freeze(
    {
        GRID: 1,
        SLIDER: 2,
        LINEAR: 3
    }
);

export default function FilteredMovies({layoutType, filteringFunc, ...other}) {
    // TODO: generalize
    if (!filteringFunc) {
        if (other.title)
            filteringFunc = movie => movie.title.includes(other.title);
        else
            filteringFunc = () => true;
    }
    const movies = useSelector(state => state.movies).filter(filteringFunc);

    function createLayout() {
        switch (layoutType) {
            case LayoutType.GRID:
                return <GridMoviesList movies={movies} {...other}/>;
            case LayoutType.SLIDER:
                return <SliderMoviesList movies={movies} {...other}/>;
            case LayoutType.LINEAR:
                return <LinearMoviesList movies={movies} {...other}/>
        }
    }

    return createLayout();
}