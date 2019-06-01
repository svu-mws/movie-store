import React, {} from 'react';
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieCover from "../MovieCover/MovieCover";

export default function MovieItem({movie}) {
    const {id, title, imageUrl, releasedDate, rating, isNew} = movie;
    return (
        <div className="w3l-movie-gride-agile">
            <MovieCover id={id} title={title} imageUrl={imageUrl}/>
            <MovieDetails id={id} title={title} releasedDate={releasedDate} rating={rating}/>
            {
                isNew ? (
                    <div className="ribben">
                        <p>NEW</p>
                    </div>
                ) : null
            }
        </div>
    );
};