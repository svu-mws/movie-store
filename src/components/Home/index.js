import React from 'react'
import {LayoutType} from "components/FilteredMovies";
import FilterableMovies from "components/FilterableMovies";

export default function Home({}) {
    return (
        <FilterableMovies layoutType={LayoutType.GRID}/>
    );
}