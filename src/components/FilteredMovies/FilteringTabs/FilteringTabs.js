import React from 'react'

export default function FilteringTabs({filterNames}) {
    return (
        <ul className="resp-tabs-list">
            {
                filterNames.map((name, index) => <li key={index}>{name}</li>)
            }
        </ul>
    );
}