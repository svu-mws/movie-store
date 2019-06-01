import React from 'react'
import Star from './Star';


export default function Rating({rating}) {
    const r = Math.round(rating);
    const stars = [...Array(5).keys()].map(x => x + 1);
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