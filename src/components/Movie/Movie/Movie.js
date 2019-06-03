import React from 'react'

function MovieTitle({title, description}) {
    return (
        <div className="inner-agile-w3l-part-head">
            <h3 className="w3l-inner-h-title">{title}</h3>
            <p className="w3ls_head_para">{description}</p>
        </div>
    );
}

function MovieImage({src}) {
    return (
        <img src={src} alt="" className="img-responsive"/>
    );
}

function MovieDetails({title, description, releasedDate, genres, rating}) {
    return (
        <div className="player-text side-bar-info">
            <p className="fexi_header">{title}</p>
            <p className="fexi_header_para"><span
                className="conjuring_w3">Story Line<label>:</label></span>{description}</p>
            <p className="fexi_header_para"><span>Release On<label>:</label></span>{releasedDate}</p>
            <p className="fexi_header_para">
                <span>Genres<label>:</label> </span>
                <a href="genre.html">Drama</a> |
                <a href="genre.html">Adventure</a> |
                <a href="genre.html">Family</a>
            </p>
            <p className="fexi_header_para fexi_header_para1"><span>Star Index<label>:</label></span>
                <a href="#"><i className="fa fa-star" aria-hidden="true"/></a>
                <a href="#"><i className="fa fa-star" aria-hidden="true"/></a>
                <a href="#"><i className="fa fa-star-half-o" aria-hidden="true"/></a>
                <a href="#"><i className="fa fa-star-o" aria-hidden="true"/></a>
                <a href="#"><i className="fa fa-star-o" aria-hidden="true"/></a>
            </p>
        </div>

    );
}

function Comment({date, content, username, userImage,}) {
    return (
        <div className="media response-info">
            <div className="media-left response-text-left">
                <a href="#">
                    <img className="media-object" src={userImage} alt=""/>
                </a>
                <h5><a href="#">{username}</a></h5>
            </div>
            <div className="media-body response-text-right">
                <p>{content}</p>
                <ul>
                    <li>{date}</li>
                </ul>
            </div>
        </div>
    );
}

function MovieComments({comments}) {
    return (
        <div className="comments">
            <div className="response">
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            <Comment content={comment.content}
                                     date={comment.date}
                                     userImage={comment.userImage}
                                     username={comment.username}
                            />
                        )
                    })

                }

            </div>
            <div className="all-comments-info">
                <h5>LEAVE A COMMENT</h5>
                <div className="agile-info-wthree-box">
                    <form>
                        <textarea placeholder="Message" required=""></textarea>
                        <input type="submit" value="SEND"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

function RecommendedMovieCard({title, detail, imageSrc, url, releasedDate}) {
    return (
        <div className="w3l-recent-grid">
            <div className="wom">
                <a href={url}><img src={imageSrc} alt=" " className="img-responsive"/></a>
            </div>
            <div className="wom-right">
                <h5><a href={url}>{title}</a></h5>
                <p>{detail}</p>
                <ul className="w3l-sider-list">
                    <li><i className="fa fa-clock-o" aria-hidden="true"/>{releasedDate}</li>
                </ul>
            </div>
        </div>
    );
}

function RecommendedMovies({movies}) {
    return (
        <div className="agile-info-recent">
            <h4 className="side-t-w3l-agile">More <span>Like</span> This</h4>
            <div className="w3ls-recent-grids">
                {
                    movies.map(movie => {
                        return (
                            <RecommendedMovieCard title={movie.title}
                                                  detail={movie.detail}
                                                  imageSrc={movie.image}
                                                  releasedDate={movie.releasedDate}
                                                  url={movie.url}
                            />
                        )
                    })
                }
            </div>
        </div>

    );
}


export default function Movie({movie}) {
    const {id, title, description, imageUrl, releasedDate, rating, genres, comments, recommendedMovies} = movie;
    return (
        <div className="agile_featured_movies">
            <MovieTitle description={description} title={title}/>
            <div className="col-md-8 latest-news-agile-left-content">
                <MovieImage src={imageUrl}/>
                <MovieComments comments={comments}/>
            </div>
            <div className="col-md-4 latest-news-agile-right-content">
                <MovieDetails title={title}
                              description={description}
                              releasedDate={releasedDate}
                              rating={rating}
                              genres={genres}/>
                <RecommendedMovies movies={recommendedMovies}/>
            </div>
        </div>
    );
}
