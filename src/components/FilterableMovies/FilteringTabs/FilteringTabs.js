import React from 'react'

export default function FilteringTabs({filterTypes, startingFilter, onSelect}) {
    return (
        <ul className="resp-tabs-list">
            {
                filterTypes.map((name, index) =>
                    <li className={"resp-tab-item " + name === startingFilter ? "resp-tab-active" : ""}
                        key={index}
                        onClick={() => onSelect(name)}>
                        {name}
                    </li>
                )
            }
        </ul>
    );
}