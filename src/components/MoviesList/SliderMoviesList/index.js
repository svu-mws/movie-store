import React from 'react'
import MovieItem from "components/Movie/MovieItem";
import withTitle from "components/HOC/WithTitle";

function SliderMoviesList({movies}) {
    return (
        <div className="w3_agile_latest_movies">
            <div id="owl-demo" className="owl-carousel owl-theme">
                {
                    movies.map(movie => <MovieItem movie={movie} inSlider/>)
                }
            </div>
        </div>
    );
}

export default withTitle(SliderMoviesList);