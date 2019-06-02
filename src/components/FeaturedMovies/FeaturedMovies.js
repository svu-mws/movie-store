import React from 'react'
import FeaturedMovie from "./FeaturedMovie";
import MoviesList from "components/MoviesList/";

export default function FeaturedMovies({featuredMovie, otherMovies}) {
    return (
        <div className="resp-tabs-container">
            <div className="tab1">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                        <FeaturedMovie movie={featuredMovie}/>
                        <MoviesList movies={otherMovies}/>
                        <div className="clearfix">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}