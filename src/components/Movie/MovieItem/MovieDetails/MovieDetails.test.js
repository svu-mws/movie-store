import React from 'react'
import {shallow} from 'enzyme'
import MovieDetails from "components/Movie/MovieItem/MovieDetails/MovieDetails";

describe('Movie Details', () => {

    it('should display the title', () => {
        const title = 'Deadpool';
        const wrapper = shallow(<MovieDetails title={title}/>);
        expect(wrapper.find("[data-test='title']").text()).toEqual(title)
    });

    it('should display the released date', () => {
        const releasedDate = '10-5-2017';
        const wrapper = shallow(<MovieDetails releasedDate={releasedDate}/>);
        expect(wrapper.find("[data-test='releasedDate']").text()).toEqual(releasedDate)
    });
});