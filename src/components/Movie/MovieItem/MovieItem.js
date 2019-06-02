import React, {} from 'react';
import MovieDetails from "./MovieDetails/MovieDetails";
import MovieCover from "./MovieCover/MovieCover";

export default function MovieItem({movie, inSlider = false}) {
    const {id, title, imageUrl, releasedDate, rating, isNew} = movie;
    return (
        <div className={inSlider? "item" : ""}>
            <div className={"w3l-movie-gride-agile" + inSlider ? " w3l-movie-gride-slider" : ""}>
                <MovieCover id={id}
                            title={title}
                            imageUrl={imageUrl}/>
                <MovieDetails id={id}
                              title={title}
                              releasedDate={releasedDate}
                              rating={rating}/>
                {
                    isNew ? (
                        <div className={"ribben" + inSlider ? " one" : ""} data-test="new">
                            <p>NEW</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};