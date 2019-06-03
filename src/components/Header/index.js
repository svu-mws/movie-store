import React from 'react'
import {Link} from "@reach/router";
import Navbar from './Navbar'
import Banner from "./Banner";
import SearchBar from "./SearchBar";

export default function Header({}) {
    // TODO : slide show
    return (
        <div id="demo-1"
             data-zs-src='["images/2.jpg", "images/1.jpg", "images/3.jpg","images/4.jpg"]'
             data-zs-overlay="dots">
            <div className="demo-inner-content">
                <div className="header-w3-agileits" id="home">
                    <div className="inner-header-agile">
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button type="button"
                                        className="navbar-toggle"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">
                                        Toggle navigation
                                    </span>
                                    <span className="icon-bar">

                                    </span>
                                    <span className="icon-bar">

                                    </span>
                                    <span className="icon-bar">

                                    </span>
                                </button>
                                <h1>
                                    <Link to={"/"}>
                                        <span>
                                            M
                                        </span>
                                        ovies
                                        <span>
                                            S
                                        </span>
                                        tore
                                    </Link>
                                </h1>
                            </div>
                            <!-- navbar-header -->
                            <Navbar/>
                        </nav>
                        <SearchBar/>
                    </div>
                </div>

                <!--/banner-info-->
                <Banner>
                    <h3>Latest <span>On</span>Line <span>Mo</span>vies</h3>
                    <h4>In space no one can hear you scream.</h4>
                    <a className="w3_play_icon1" href="#small-dialog1">
                        Watch Trailer
                    </a>
                </Banner>
            </div>
        </div>
    );
}