import React from 'react'

export default function Footer({genres, latestMovies}) {
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
                                <li><a href="#" title="Release 2016">2016</a></li>
                                <li><a href="#" title="Release 2015">2015</a></li>
                                <li><a href="#" title="Release 2014">2014</a></li>
                                <li><a href="#" title="Release 2013">2013</a></li>
                                <li><a href="#" title="Release 2012">2012</a></li>
                                <li><a href="#" title="Release 2011">2011</a></li>
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