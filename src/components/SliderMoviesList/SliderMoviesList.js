import React from 'react'
import {capitalize} from "utils/StringUtils";
import MovieItem from "components/Movie/MovieItem/MovieItem";

export default function SliderMoviesList({type, movies}) {
    return (
        <React.Fragment>
            <h3 className="agile_w3_title"> {capitalize(type)} <span>Movies</span></h3>
            <div className="w3_agile_latest_movies">
                <div id="owl-demo" className="owl-carousel owl-theme">
                    {
                        movies.map(movie => <MovieItem movie={movie} inSlider/>)
                    }
                </div>
            </div>
        </React.Fragment>
    );
}