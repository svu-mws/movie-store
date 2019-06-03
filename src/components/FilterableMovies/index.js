import React, {useState} from 'react'
import FilteringTabs from "components/FilterableMovies/FilteringTabs/FilteringTabs";
import FilteredMovies, {LayoutType} from "components/FilteredMovies";
import {useSelector} from "react-redux";

export default function FilterableMovies({layoutType = LayoutType.GRID, type = "All"}) {
    // TODO: year filtering logic + check hooks
    const filterTypes = ['All', 'Featured', ...useSelector(state => state.genres)];
    const [selectedFilter, setSelectedFilter] = useState(type);
    const filteringFunc = createFilteringFunc();
    return (
        <div className="agileinfo_tabs">
            <div id="horizontalTab">
                <FilteringTabs
                    filterTypes={filterTypes}
                    startingFilter={type}
                    onSelect={setSelectedFilter}/>
                <FilteredMovies
                    layoutType={layoutType}
                    filteringFunc={filteringFunc}/>
            </div>
        </div>
    );

    function createFilteringFunc() {
        switch (selectedFilter) {
            case 'All':
                return () => true;
            case 'Featured':
                return movie => movie.featured;
            default:
                return movie => movie.genres.includes(selectedFilter)
        }
    }
}