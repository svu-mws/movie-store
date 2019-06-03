import React from 'react';
import {shallow, render} from 'enzyme/build';
import Index from "components/Movie/MovieItem/index";

describe('Index', () => {

    it('should display that the movie is new', () => {
        const movie = {
            title: 'Batman',
            releasedDate: '10-5-2015',
            isNew: true,
            imageUrl: 'https://via.placeholder.com/150',
            rating: 4
        };
        const wrapper = shallow(<Index movie={movie}/>);
        expect(wrapper.find('[data-test="new"]')).toHaveLength(1);
    });
});