import React, {useState} from 'react';
import './Movie.scss'

// import '../resources/css/popuo-box.css';
// import '../resources/css/easy-responsive-tabs.css';
// import '../resources/css/zoomslider.css';
// import '../resources/css/style.css';
// import '../resources/css/font-awesome.css';


// require('jquery/dist/jquery.min');
// require('../resources/js/bootstrap');


const Movie = props => {
    return (
        <div>
            <h2>Movie: {props.movieId}</h2>
        </div>
    );
}

export default Movie;
/*
 <div>
                <div id="demo-1" className="banner-inner">
                    <div className="banner-inner-dott">
                        <div className="header-w3-agileits" id="home">
                            <div className="inner-header-agile part2">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                        </button>
                                        <h1><a href="index.html"><span>M</span>ovies <span>P</span>ro</a></h1>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Genre <b
                                                    className="caret"></b></a>
                                                <ul className="dropdown-menu multi-column columns-3">
                                                    <li>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">Action</a></li>
                                                                <li><a href="genre.html">Biography</a></li>
                                                                <li><a href="genre.html">Crime</a></li>
                                                                <li><a href="genre.html">Family</a></li>
                                                                <li><a href="horror.html">Horror</a></li>
                                                                <li><a href="genre.html">Romance</a></li>
                                                                <li><a href="genre.html">Sports</a></li>
                                                                <li><a href="genre.html">War</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">Adventure</a></li>
                                                                <li><a href="comedy.html">Comedy</a></li>
                                                                <li><a href="genre.html">Documentary</a></li>
                                                                <li><a href="genre.html">Fantasy</a></li>
                                                                <li><a href="genre.html">Thriller</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">Animation</a></li>
                                                                <li><a href="genre.html">Costume</a></li>
                                                                <li><a href="genre.html">Drama</a></li>
                                                                <li><a href="genre.html">History</a></li>
                                                                <li><a href="genre.html">Musical</a></li>
                                                                <li><a href="genre.html">Psychological</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="series.html">tv - series</a></li>
                                            <li><a href="news.html">news</a></li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle"
                                                   data-toggle="dropdown">Country <b
                                                    className="caret"></b></a>
                                                <ul className="dropdown-menu multi-column columns-3">
                                                    <li>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">Asia</a></li>
                                                                <li><a href="genre.html">France</a></li>
                                                                <li><a href="genre.html">Taiwan</a></li>
                                                                <li><a href="genre.html">United States</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">China</a></li>
                                                                <li><a href="genre.html">HongCong</a></li>
                                                                <li><a href="genre.html">Japan</a></li>
                                                                <li><a href="genre.html">Thailand</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <ul className="multi-column-dropdown">
                                                                <li><a href="genre.html">Euro</a></li>
                                                                <li><a href="genre.html">India</a></li>
                                                                <li><a href="genre.html">Korea</a></li>
                                                                <li><a href="genre.html">United Kingdom</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="list.html">A - z list</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>

                                    </div>
                                    <div className="clearfix"></div>
                                </nav>
                                <div className="w3ls_search">
                                    <div className="cd-main-header">
                                        <ul className="cd-header-buttons">
                                            <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div id="cd-search" className="cd-search">
                                        <form action="#" method="post">
                                            <label>
                                                <input name="Search" type="search" placeholder="Search..."/>
                                            </label>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="w3_agilits_banner_bootm">
                    <div className="w3_agilits_inner_bottom">
                        <div className="col-md-6 wthree_agile_login">
                            <ul>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> (+000) 009 455 4088</li>
                                <li><a href="#" className="login" data-toggle="modal" data-target="#myModal4">Login</a>
                                </li>
                                <li><a href="#" className="login reg" data-toggle="modal"
                                       data-target="#myModal5">Register</a></li>

                            </ul>
                        </div>
                        <div className="col-md-6 wthree_share_agile">

                            <div className="single-agile-shar-buttons">
                                <ul>
                                    <li>
                                        <div className="fb-like fb_iframe_widget"
                                             data-href="https://www.facebook.com/w3layouts"
                                             data-layout="button_count" data-action="like" data-size="small"
                                             data-show-faces="false"
                                             data-share="false" fb-xfbml-state="rendered"
                                             fb-iframe-plugin-query="action=like&amp;app_id=&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;layout=button_count&amp;locale=en_GB&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small">
                                        </div>
                                    </li>
                                    <li>
                                        <div className="fb-share-button fb_iframe_widget"
                                             data-href="https://www.facebook.com/w3layouts"
                                             data-layout="button_count" data-size="small" data-mobile-iframe="true"
                                             fb-xfbml-state="rendered"
                                             fb-iframe-plugin-query="app_id=&amp;container_width=31&amp;href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;layout=button_count&amp;locale=en_GB&amp;mobile_iframe=true&amp;sdk=joey&amp;size=small">
                                        </div>
                                    </li>
                                    <li className="news-twitter">

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal4" tabIndex="-1" role="dialog">

                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Login</h4>
                                <div className="login-form">
                                    <form action="#" method="post">
                                        <label>
                                            <input type="email" name="email" placeholder="E-mail" required=""/>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" required=""/>
                                        <div className="tp">
                                            <input type="submit" value="LOGIN NOW"/>
                                        </div>
                                        <div className="forgot-grid">
                                            <div className="log-check">
                                                <label className="checkbox"><input type="checkbox" name="checkbox"/>Remember
                                                    me</label>
                                            </div>
                                            <div className="forgot">
                                                <a href="#" data-toggle="modal" data-target="#myModal2">Forgot
                                                    Password?</a>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal5" tabIndex="-1" role="dialog">

                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Register</h4>
                                <div className="login-form">
                                    <form action="#" method="post">
                                        <input type="text" name="name" placeholder="Name" required=""/>
                                        <input type="email" name="email" placeholder="E-mail" required=""/>
                                        <input type="password" name="password" placeholder="Password" required=""/>
                                        <input type="password" name="conform password" placeholder="Confirm Password"
                                               required=""/>
                                        <div className="signin-rit">
														<span className="agree-checkbox">
														<label className="checkbox"><input type="checkbox"
                                                                                           name="checkbox"/>I agree to your <a
                                                            className="w3layouts-t" href="#" target="_blank">Terms of Use</a> and <a
                                                            className="w3layouts-t" href="#" target="_blank">Privacy Policy</a></label>
													</span>
                                        </div>
                                        <div className="tp">
                                            <input type="submit" value="REGISTER NOW"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3_breadcrumb">
                    <div className="breadcrumb-inner">
                        <ul>
                            <li><a href="index.html">Home</a><i>//</i></li>

                            <li>Single</li>
                        </ul>
                    </div>
                </div>

                <div className="w3_content_agilleinfo_inner">
                    <div className="agile_featured_movies">
                        <div className="inner-agile-w3l-part-head">
                            <h3 className="w3l-inner-h-title">Single Page</h3>
                            <p className="w3ls_head_para">Add short Description</p>
                        </div>
                        <div className="latest-news-agile-info">
                            <div className="col-md-8 latest-news-agile-left-content">
                                <div className="single video_agile_player">

                                    <div className="video-grid-single-page-agileits">
                                        <div data-video="f2Z65fobH2I" id="video"><img src="images/1.jpg" alt=""
                                                                                      className="img-responsive"/>
                                        </div>
                                    </div>
                                    <h4>Force 2 | Official Trailer | John Abraham, Sonakshi Sinha and Tahir Raj
                                        Bhasin</h4>
                                </div>
                                <div className="single-agile-shar-buttons">
                                    <h5>Share This :</h5>
                                    <ul>
                                        <li>
                                            <div className="fb-like" data-href="https://www.facebook.com/w3layouts"
                                                 data-layout="button_count" data-action="like" data-size="small"
                                                 data-show-faces="false"
                                                 data-share="false"></div>

                                        </li>
                                        <li>
                                            <div className="fb-share-button"
                                                 data-href="https://www.facebook.com/w3layouts"
                                                 data-layout="button_count" data-size="small" data-mobile-iframe="true">
                                                <a
                                                    className="fb-xfbml-parse-ignore" target="_blank"
                                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse">Share</a>
                                            </div>
                                        </li>
                                        <li className="news-twitter">
                                            <a href="https://twitter.com/w3layouts" className="twitter-follow-button"
                                               data-show-count="false">Follow @w3layouts</a>
                                            <script async src="//platform.twitter.com/widgets.js"
                                                    charSet="utf-8"></script>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/intent/tweet?screen_name=w3layouts"
                                               className="twitter-mention-button" data-show-count="false">Tweet to
                                                @w3layouts</a>
                                            <script async src="//platform.twitter.com/widgets.js"
                                                    charSet="utf-8"></script>
                                        </li>
                                        <li>

                                            <div className="g-plusone" data-size="medium"></div>


                                        </li>
                                    </ul>
                                </div>
                                <div className="admin-text">
                                    <h5>WRITTEN BY ADMIN</h5>
                                    <div className="admin-text-left">
                                        <a href="#"><img src="images/admin.jpg" alt=""/></a>
                                    </div>
                                    <div className="admin-text-right">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many
                                            variations of
                                            passages of Lorem Ipsum available,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <span>View all posts by :<a href="#"> Admin </a></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="response">
                                    <h4>Responses</h4>
                                    <div className="media response-info">
                                        <div className="media-left response-text-left">
                                            <a href="#">
                                                <img className="media-object" src="images/admin.jpg" alt=""/>
                                            </a>
                                            <h5><a href="#">Admin</a></h5>
                                        </div>
                                        <div className="media-body response-text-right">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many
                                                variations of
                                                passages of Lorem Ipsum available,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.There
                                                are many
                                                variations of passages of Lorem Ipsum available.</p>
                                            <ul>
                                                <li>October 15, 2016</li>
                                                <li><a href="single.html"><i className="fa fa-reply"
                                                                             aria-hidden="true"></i> Reply</a>
                                                </li>
                                            </ul>
                                            <div className="media response-info">
                                                <div className="media-left response-text-left">
                                                    <a href="#">
                                                        <img className="media-object" src="images/admin.jpg" alt=""/>
                                                    </a>
                                                    <h5><a href="#">Admin</a></h5>
                                                </div>
                                                <div className="media-body response-text-right">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There
                                                        are many
                                                        variations of passages of Lorem Ipsum available,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.There are
                                                        many
                                                        variations of passages of Lorem Ipsum available.</p>
                                                    <ul>
                                                        <li>November 02, 2016</li>
                                                        <li><a href="single.html"><i className="fa fa-reply"
                                                                                     aria-hidden="true"></i>
                                                            Reply</a></li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="media response-info">
                                        <div className="media-left response-text-left">
                                            <a href="#">
                                                <img className="media-object" src="images/admin.jpg" alt=""/>
                                            </a>
                                            <h5><a href="#">Admin</a></h5>
                                        </div>
                                        <div className="media-body response-text-right">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many
                                                variations of
                                                passages of Lorem Ipsum available,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.There
                                                are many
                                                variations of passages of Lorem Ipsum available.</p>
                                            <ul>
                                                <li>November 03, 2016</li>
                                                <li><a href="single.html"><i className="fa fa-reply"
                                                                             aria-hidden="true"></i> Reply</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="all-comments-info">
                                    <h5>LEAVE A COMMENT</h5>
                                    <div className="agile-info-wthree-box">
                                        <form>
                                            <div className="col-md-6 form-info">
                                                <input type="text" name="name" placeholder="Your Name" required=""/>
                                                <input type="email" name="email" placeholder="Your Email" required=""/>
                                                <input type="text" name="phone" placeholder="Your Phone" required=""/>
                                            </div>
                                            <div className="col-md-6 form-info">

                                                <textarea placeholder="Message" required=""></textarea>
                                                <input type="submit" value="SEND"/>
                                            </div>
                                            <div className="clearfix"></div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 latest-news-agile-right-content">
                                <h4 className="side-t-w3l-agile">For Latest <span>Movies</span></h4>
                                <div className="side-bar-form">
                                    <form action="#" method="post">
                                        <input type="search" name="email" placeholder="Search here...."
                                               required="required"/>
                                        <input type="submit" value=" "/>
                                    </form>
                                </div>
                                <h4 className="side-t-w3l-agile">Hot <span>Topics</span></h4>
                                <ul className="side-bar-agile">
                                    <li><a href="single.html">John Abraham, Sonakshi Sinha and Tahir ...</a>
                                        <p>Sep 29, 2016</p></li>
                                    <li><a href="single.html">Romantic drama about two people finding out that love</a>
                                        <p>Feb 3, 2016</p></li>
                                    <li><a href="single.html">Storks have moved on from delivering babies to packages
                                        ...</a>
                                        <p>Aug 1, 2016</p></li>
                                    <li><a href="single.html">John Abraham, Sonakshi Sinha and Tahir ...</a>
                                        <p>Sep 29, 2016</p></li>
                                    <li><a href="single.html">John Abraham, Sonakshi Sinha and Tahir ...</a>
                                        <p>Sep 29, 2016</p></li>
                                </ul>
                                <h4 className="side-t-w3l-agile">Latest <span>Trailer</span></h4>
                                <div className="video_agile_player sidebar-player">
                                    <div className="video-grid-single-page-agileits">
                                        <div data-video="fNKUgX8PhMA" id="video1"><img src="images/22.jpg" alt=""
                                                                                       className="img-responsive"/>
                                            <div id="play"></div>
                                        </div>
                                    </div>


                                    <div className="player-text side-bar-info">
                                        <p className="fexi_header">Me Before You </p>
                                        <p className="fexi_header_para"><span
                                            className="conjuring_w3">Story Line<label>:</label></span>Me
                                            Before You Official Trailer #2 (2016) - Emilia Clarke, Sam Claflin Movie HD

                                            A girl in a small town forms an unlikely....</p>
                                        <p className="fexi_header_para"><span>Release On<label>:</label></span>Feb 3,
                                            2016 </p>
                                        <p className="fexi_header_para">
                                            <span>Genres<label>:</label> </span>
                                            <a href="genre.html">Drama</a> |
                                            <a href="genre.html">Adventure</a> |
                                            <a href="genre.html">Family</a>
                                        </p>
                                        <p className="fexi_header_para fexi_header_para1">
                                            <span>Star Rating<label>:</label></span>
                                            <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                                        </p>
                                    </div>

                                </div>
                                <div className="clearfix"></div>
                                <div className="agile-info-recent">
                                    <h4 className="side-t-w3l-agile">Latest <span>Trailer</span></h4>
                                    <div className="w3ls-recent-grids">
                                        <div className="w3l-recent-grid">
                                            <div className="wom">
                                                <a href="single.html"><img src="images/m12.jpg" alt=" "
                                                                           className="img-responsive"/></a>
                                            </div>
                                            <div className="wom-right">
                                                <h5><a href="single.html">Lorem Integer rutrum</a></h5>
                                                <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                                                    Ut tellus dolor, dapibus eget.</p>
                                                <ul className="w3l-sider-list">
                                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>On Jan 12,
                                                        2016
                                                    </li>
                                                    <li><i className="fa fa-eye" aria-hidden="true"></i> 2602</li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="w3l-recent-grid">
                                            <div className="wom">
                                                <a href="single.html"><img src="images/m13.jpg" alt=" "
                                                                           className="img-responsive"/></a>
                                            </div>
                                            <div className="wom-right">
                                                <h5><a href="single.html">Lorem Integer rutrum</a></h5>
                                                <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                                                    Ut tellus dolor, dapibus eget.</p>
                                                <ul className="w3l-sider-list">
                                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>On Mar 3,
                                                        2016
                                                    </li>
                                                    <li><i className="fa fa-eye" aria-hidden="true"></i> 2742</li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="w3l-recent-grid">
                                            <div className="wom">
                                                <a href="single.html"><img src="images/m14.jpg" alt=" "
                                                                           className="img-responsive"/></a>
                                            </div>
                                            <div className="wom-right">
                                                <h5><a href="single.html">Lorem Integer rutrum</a></h5>
                                                <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                                                    Ut tellus dolor, dapibus eget.</p>
                                                <ul className="w3l-sider-list">
                                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>On Oct 13,
                                                        2016
                                                    </li>
                                                    <li><i className="fa fa-eye" aria-hidden="true"></i> 2802</li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                        </div>

                    </div>
                </div>


                <div className="contact-w3ls" id="contact">
                    <div className="footer-w3lagile-inner">
                        <h2>Sign up for our <span>Newsletter</span></h2>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros
                            eget tellus
                            tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                        <div className="footer-contact">
                            <form action="#" method="post">
                                <input type="email" name="Email" placeholder="Enter your email...." required=" "/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                        <div className="footer-grids w3-agileits">
                            <div className="col-md-2 footer-grid">
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
                            <div className="col-md-2 footer-grid">
                                <h4>Movies</h4>
                                <ul>

                                    <li><a href="genre.html">ADVENTURE</a></li>
                                    <li><a href="comedy.html">COMEDY</a></li>
                                    <li><a href="series.html">FANTASY</a></li>
                                    <li><a href="series.html">ACTION </a></li>
                                    <li><a href="genre.html">MOVIES </a></li>
                                    <li><a href="horror.html">HORROR </a></li>

                                </ul>
                            </div>


                            <div className="col-md-2 footer-grid">
                                <h4>Review Movies</h4>
                                <ul className="w3-tag2">
                                    <li><a href="comedy.html">Comedy</a></li>
                                    <li><a href="horror.html">Horror</a></li>
                                    <li><a href="series.html">Historical</a></li>
                                    <li><a href="series.html">Romantic</a></li>
                                    <li><a href="series.html">Love</a></li>
                                    <li><a href="genre.html">Action</a></li>
                                    <li><a href="single.html">Reviews</a></li>
                                    <li><a href="comedy.html">Comedy</a></li>
                                    <li><a href="horror.html">Horror</a></li>
                                    <li><a href="series.html">Historical</a></li>
                                    <li><a href="series.html">Romantic</a></li>
                                    <li><a href="genre.html">Love</a></li>
                                    <li><a href="comedy.html">Comedy</a></li>
                                    <li><a href="horror.html">Horror</a></li>
                                    <li><a href="genre.html">Historical</a></li>

                                </ul>


                            </div>
                            <div className="col-md-2 footer-grid">
                                <h4>Latest Movies</h4>
                                <div className="footer-grid1">
                                    <div className="footer-grid1-left">
                                        <a href="single.html"><img src="images/1.jpg" alt=" "
                                                                   className="img-responsive"/></a>
                                    </div>
                                    <div className="footer-grid1-right">
                                        <a href="single.html">eveniet ut molesti</a>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="footer-grid1">
                                    <div className="footer-grid1-left">
                                        <a href="single.html"><img src="images/2.jpg" alt=" "
                                                                   className="img-responsive"/></a>
                                    </div>
                                    <div className="footer-grid1-right">
                                        <a href="single.html">earum rerum tenet</a>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="footer-grid1">

                                    <div className="footer-grid1-left">
                                        <a href="single.html"><img src="images/4.jpg" alt=" "
                                                                   className="img-responsive"/></a>
                                    </div>
                                    <div className="footer-grid1-right">
                                        <a href="single.html">eveniet ut molesti</a>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="footer-grid1">
                                    <div className="footer-grid1-left">
                                        <a href="single.html"><img src="images/3.jpg" alt=" "
                                                                   className="img-responsive"/></a>
                                    </div>
                                    <div className="footer-grid1-right">
                                        <a href="single.html">earum rerum tenet</a>

                                    </div>
                                    <div className="clearfix"></div>
                                </div>


                            </div>
                            <div className="col-md-2 footer-grid">
                                <h4 className="b-log"><a href="index.html"><span>M</span>ovies <span>P</span>ro</a></h4>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m1.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m2.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m3.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m4.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m5.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>
                                <div className="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m6.jpg" alt=" "
                                                               className="img-responsive"/></a>
                                </div>

                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                            <ul className="bottom-links-agile">
                                <li><a href="icons.html" title="Font Icons">Icons</a></li>
                                <li><a href="short-codes.html" title="Short Codes">Short Codes</a></li>
                                <li><a href="contact.html" title="contact">Contact</a></li>

                            </ul>
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
                    <p>© 2017 Movies Pro. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a>
                    </p>
                </div>
            </div>

* */
