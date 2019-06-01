import React, {} from 'react';
import {capitalize} from '/src/utils/StringUtils'

export default function MovieItem({movie}) {
    const {title, image, releasedDate, rating: r, isNew} = movie;
    const rating = Math.floor(r);
    const stars = [...Array(5).keys()].map(x => x + 1);
    return (
        <div className="w3l-movie-gride-agile">
            <a href="single.html" className="hvr-sweep-to-bottom">
                <img src={image}
                     title={title}
                     className="img-responsive"
                     alt={title}/>
                <div className="w3l-action-icon">
                    <i className="fa fa-play-circle-o"
                       aria-hidden="true">
                    </i>
                </div>
            </a>
            <div className="mid-1 agileits_w3layouts_mid_1_home">
                <div className="w3l-movie-text">
                    <h6>
                        <a href="single.html">{capitalize(title)}
                        </a>
                    </h6>
                </div>
                <div className="mid-2 agile_mid_2_home">
                    <p>{releasedDate}</p>
                    <div className="block-stars">
                        <ul className="w3l-ratings">
                            {
                                stars.map(number => {
                                    return (
                                        <li key={number}>
                                            <a href="#">
                                                <i className={number >= rating ? 'fa fa-star' : 'fa fa-star-o'}
                                                   aria-hidden="true">
                                                </i>
                                            </a>
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="clearfix">
                    </div>
                </div>
            </div>
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