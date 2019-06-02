import React from 'react'
import range from 'lodash/range'


export default function Footer({genres, latestMovies}) {
    const currentYear = new Date().getFullYear(), startingYear = currentYear - 5;
    const years = range(startingYear, currentYear + 1);
    return (
        <React.Fragment>
            <div className="contact-w3ls" id="contact">
                <div className="footer-w3lagile-inner">
                    <h2>Sign up for our <span>Newsletter</span></h2>
                    <div className="footer-contact">
                        <form action="#" method="post">
                            <input type="email"
                                   name="Email"
                                   placeholder="Enter your email...."
                                   required=" "/>
                            <input
                                type="submit"
                                value="Subscribe"/>
                        </form>
                    </div>
                    <div className="footer-grids w3-agileits">
                        <div className="col-md-4 footer-grid">
                            <h4>Release</h4>
                            <ul>
                                {
                                    years.map(year => <li><a href="#" title={`Release ${year}`}>{year}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Review Movies</h4>
                            <ul className="w3-tag2">
                                {
                                    genres.map((genre, index) => <li key={index}><a href={}>{genre}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Latest Movies</h4>
                            {
                                latestMovies.map(({title, imageUrl}) => (
                                    <div className="footer-grid1">
                                        <div className="footer-grid1-left">
                                            <a href="single.html">
                                                <img src={imageUrl}
                                                     alt={title}
                                                     className="img-responsive"/>
                                            </a>
                                        </div>
                                        <div className="footer-grid1-right">
                                            <a href="single.html">
                                                {title}
                                            </a>
                                        </div>
                                        <div className="clearfix"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="clearfix"/>
                    </div>
                    <h3 className="text-center follow">Connect <span>Us</span></h3>
                    <ul className="social-icons1 agileinfo">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="w3agile_footer_copy">
                <p>© 2019 Movies Store. All rights reserved | Design by
                    <a href="http://w3layouts.com/">Ahmad, Zaher, Obada, Mohammad
                    </a>
                </p>
            </div>
            <a href="#home" id="toTop" className="scroll" style="display: block;">
                <span id="toTopHover"
                      style="opacity: 1;">
                </span>
            </a>
        </React.Fragment>
    );
}