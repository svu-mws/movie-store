import React from 'react'
import {Link} from "@reach/router";

export default function MovieCover({id, imageUrl, title}) {
    return (
        <Link to={`movies/${id}`} className="hvr-sweep-to-bottom">
            <img src={imageUrl}
                 title={title}
                 className="img-responsive"
                 alt={title}/>
            <div className="w3l-action-icon">
                <i className="fa fa-play-circle-o"
                   aria-hidden="true">
                </i>
            </div>
        </Link>
    );
}