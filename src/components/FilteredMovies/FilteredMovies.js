import React from 'react'
import FilteringTabs from "components/FilteredMovies/FilteringTabs/FilteringTabs";
import FeaturedMovies from "components/FeaturedMovies";

export default function FilteredMovies({}) {
    return (
        <div className="agileinfo_tabs">
            <div id="horizontalTab">
                <FilteringTabs/>
                <FeaturedMovies/>
            </div>
        </div>
    );
}