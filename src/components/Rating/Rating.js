import React from 'react'
import Star from './Star';
import range from 'lodash/range'

export default function Rating({rating}) {
    const r = Math.round(rating);
    const stars = range(1, r + 1);
    return (
        <div className="block-stars">
            <ul className="w3l-ratings">
                {
                    stars.map(number => {
                        return (
                            <li key={number}>
                                <Star fill={number >= r}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}