import React from 'react'
import {capitalize} from "utils/StringUtils";
import Rating from "components/Rating";

export default function FeaturedMovie({movie}) {
    const {title, imageUrl, story, releasedDate, genres, rating} = movie;
    return (
        <div className="col-md-5 video_agile_player">
            <div className="video-grid-single-page-agileits">
                <div data-video="f2Z65fobH2I" id="video">
                    <img src={imageUrl} alt={title} className="img-responsive"/></div>
            </div>
            <div className="player-text">
                <p className="fexi_header">{title}</p>
                <p className="fexi_header_para">
                    <span className="conjuring_w3">
                        Story Line
                        <label>:</label>
                    </span>
                    {story}
                </p>
                <p className="fexi_header_para">
                    <span>
                        Released On
                        <label>:</label>
                    </span>
                    {releasedDate}
                </p>
                <p className="fexi_header_para">
                    <span>Genres<label>:</label> </span>
                    {
                        genres.map(capitalize).join(", ")
                    }
                </p>
                <p className="fexi_header_para fexi_header_para1">
                    <span>
                        Star Rating
                        <label>:</label>
                    </span>
                    <Rating rating={rating}/>
                </p>
            </div>
        </div>
    );
}