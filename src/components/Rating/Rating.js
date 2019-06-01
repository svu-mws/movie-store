import React from 'react'


export default function Rating({rating}) {
    const rating = Math.round(rating);
    const stars = [...Array(5).keys()].map(x => x + 1);
    return (
        <div className="block-stars">
            <ul className="w3l-ratings">
                {
                    stars.map(number => {
                        return (
                            <li key={number}>
                                <a href="#">
                                    <i
                                        className={number >= rating ? 'fa fa-star' : 'fa fa-star-o'}
                                        aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}