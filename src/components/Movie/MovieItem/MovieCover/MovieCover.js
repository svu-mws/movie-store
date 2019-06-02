import React from 'react'

export default function MovieCover({id, imageUrl, title}) {
    return (
        <a href="single.html" className="hvr-sweep-to-bottom">
            <img src={imageUrl}
                 title={title}
                 className="img-responsive"
                 alt={title}/>
            <div className="w3l-action-icon">
                <i className="fa fa-play-circle-o"
                   aria-hidden="true">
                </i>
            </div>
        </a>
    );
}