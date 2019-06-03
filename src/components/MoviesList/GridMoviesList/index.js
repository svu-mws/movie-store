import React from 'react'
import MovieItem from "components/Movie/MovieItem";
import MainMovie from "./MainMovie/MainMovie"

function GridMoviesList({movies}) {
    const [mainMovie, otherMovies] = movies;
    return (
        <div className="resp-tabs-container">
            <div className="tab1">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                        <MainMovie movie={mainMovie}/>
                        <div className="col-md-7 wthree_agile-movies_list">
                            {
                                otherMovies.map(movie => <MovieItem movie={movie}/>)
                            }
                        </div>
                        <div className="clearfix">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridMoviesList;