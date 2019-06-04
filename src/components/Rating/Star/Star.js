import React from 'react'

export default function Star({fill}) {
    return (
        <i
            data-test='star'
            className={fill ? 'fa fa-star' : 'fa fa-star-o'}
            aria-hidden="true">
        </i>
    );
}
