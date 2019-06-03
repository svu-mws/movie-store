import React from 'react'
import chunk from 'lodash/chunk'
import {Link} from "@reach/router";
import {useSelector} from "react-redux";

export default function Navbar({chunkSize = 4}) {
    const genres = useSelector(state => state.genres);
    const chunkedGenres = chunk(genres, chunkSize);
    const clz = `col-sm-${Math.floor(12 / chunkedGenres.length)}`;
    return (
        <>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a href="#"
                           className="dropdown-toggle"
                           data-toggle="dropdown">
                            Genre
                            <b className="caret">
                            </b>
                        </a>
                        <ul className="dropdown-menu multi-column columns-3">
                            {
                                chunkedGenres.map((genres, index) => (
                                    <li key={index}>
                                        <div className={clz}>
                                            <ul className="multi-column-dropdown">
                                                {
                                                    genres.map((genre, index) => (
                                                        <li key={index}>
                                                            <Link to={`movies/categories/${genre}`}>
                                                                {genre}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            }
                            <div className="clearfix">
                            </div>
                        </ul>
                    </li>
                    <li>
                        <Link to="news">
                            news
                        </Link>
                    </li>
                    <li>
                        <Link to="movies/category/all">
                            A - z list
                        </Link>
                    </li>
                    <li>
                        <Link to="movies/contact-us">
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="clearfix">
            </div>
        </>
    );
}