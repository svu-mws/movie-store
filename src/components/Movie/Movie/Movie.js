import React from 'react'
import {useSelector} from "react-redux";

function MovieTitle({title = 'Untitled Movie', description = 'Description'}) {

    return (
        <div className="inner-agile-w3l-part-head">
            <h3 className="w3l-inner-h-title">{title}</h3>
            <p className="w3ls_head_para">{description}</p>
        </div>
    );
}

function MovieImage({src}) {
    if (!src) src = 'https://via.placeholder.com/1680x800';
    return (
        <img src={src} alt="" className="img-responsive"/>
    );
}

function MovieDetails({title = 'title', description = 'description d fkljhsdjkfhsdjklfhjsdhf jkdshkfjhd kjjlkfdh gjkhfdl jgkhfdjkg', releasedDate = 'Feb 3, 2016 ', genres, rating}) {
    return (
        <div className="player-text side-bar-info">
            <p className="fexi_header">{title}</p>
            <p className="fexi_header_para"><span>Story Line<label>:</label></span>{description}</p>
            <p className="fexi_header_para"><span>Release On<label>:</label></span>{releasedDate}</p>
            <p className="fexi_header_para">
                <span>Genres<label>:</label> </span>
                <a href="genre.html">Drama</a> |
                <a href="genre.html">Adventure</a> |
                <a href="genre.html">Family</a>
            </p>
            <p className="fexi_header_para fexi_header_para1"><span>Star Index<label>:</label></span>
                <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
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

function MovieComments({comments = []}) {
    return (
        <div className="comments">
            <div className="response">
                <h4>Comments</h4>
                {
                    comments.length > 0 ? comments.map((comment, index) =>
                        (
                            <Comment key={index}
                                     content={comment.content}
                                     date={comment.date}
                                     userImage={comment.userImage}
                                     username={comment.username}
                            />
                        )) : 'No Comments'

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

function RecommendedMovies({movies = []}) {
    return (
        <div className="agile-info-recent">
            <h4 className="side-t-w3l-agile">More <span>Like</span> This</h4>
            <div className="w3ls-recent-grids">
                {
                    movies.map((movie, index) => {
                        return (
                            <RecommendedMovieCard key={index}
                                                  title={movie.title}
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


export default function Movie(props) {
    const movies = useSelector(state => state.movies);
    let movie = movies[0] || {};
    //TODO get by id
    // const movie = useSelector(state => state.movies).filter(movie => movie.id.includes(props.id));

    //Just For Test
    movie.title = movie.Movie ? movie.Movie.trim() : '';
    if (movie) {
        movie.comments = movie.comments ? movie.comments : [];
        movie.comments.push(
            {
                content: 'content',
                date: 'date',
                userImage: 'https://via.placeholder.com/50',
                username: 'username',
            }
        );
        movie.recommendedMovies = [{
            title: 'Movie 1',
            detail: 'Movie Detail',
            image: 'https://via.placeholder.com/150',
            releasedDate: '6-6-2006',
            url: 'url',
        }];

    }

    return (
        <div className="agile_featured_movies">
            <MovieTitle description={movie.description} title={movie.title}/>

            <div className="col-md-8 latest-news-agile-left-content">
                <MovieImage src={movie.imageUrl}/>
                <MovieComments comments={movie.comments}/>
            </div>
            <div className="col-md-4 latest-news-agile-right-content">
                <MovieDetails title={movie.title}
                              description={movie.description}
                              releasedDate={movie.releasedDate}
                              rating={movie.rating}
                              genres={movie.genres}/>
                <RecommendedMovies movies={movie.recommendedMovies}/>
            </div>
        </div>
    );
}
