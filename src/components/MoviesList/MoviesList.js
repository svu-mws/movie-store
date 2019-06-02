import React from 'react'
import MovieItem from "components/Movie/MovieItem/MovieItem";

export default function MoviesList({movies}) {
    return (
        <div className="col-md-7 wthree_agile-movies_list">
            {
                movies.map(movie => <MovieItem movie={movie}/>)
            }
        </div>
    );
}