import React from 'react'
import Copyright from './Copyright'
import ConnectUsIcons from './ConnectUsIcons'
import ConnectUsForm from './ConnectUsForm'
import range from 'lodash/range'
import {Link} from "@reach/router";


export default function Footer({genres, latestMovies}) {
    const currentYear = new Date().getFullYear(), startingYear = currentYear - 5;
    const years = range(startingYear, currentYear + 1);
    // TODO : year?
    return (
        <>
            <div className="contact-w3ls" id="contact">
                <div className="footer-w3lagile-inner">
                    <ConnectUsForm/>
                    <div className="footer-grids w3-agileits">
                        <div className="col-md-4 footer-grid">
                            <h4>Release</h4>
                            <ul>
                                {
                                    years.map(year =>
                                        <li>
                                            <Link to={`movies/year/${year}`} title={`Release ${year}`}>
                                                {year}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Review Movies</h4>
                            <ul className="w3-tag2">
                                {
                                    genres.map((genre, index) =>
                                        <li key={index}>
                                            <Link to={`movies/categories/${genre}`}>{genre}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Latest Movies</h4>
                            {
                                latestMovies.map(({id, title, imageUrl}) => (
                                    <div className="footer-grid1">
                                        <div className="footer-grid1-left">
                                            <Link to={`movies/${id}`}>
                                                <img src={imageUrl}
                                                     alt={title}
                                                     className="img-responsive"/>
                                            </Link>
                                        </div>
                                        <div className="footer-grid1-right">
                                            <Link to={`movies/${id}`}>
                                                {title}
                                            </Link>
                                        </div>
                                        <div className="clearfix"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="clearfix"/>
                    </div>
                    <ConnectUsIcons/>
                </div>
            </div>
            <Copyright>
                © 2019 Movies Store. All rights reserved | Design by
                <a href="http://w3layouts.com/">Ahmad, Zaher, Obada, Mohammad
                </a>
            </Copyright>
            <a href="#home" id="toTop" className="scroll" style="display: block;">
                <span id="toTopHover"
                      style="opacity: 1;">
                </span>
            </a>
        </>
    );
}