import React from 'react';
import {shallow, render} from 'enzyme/build';
import MovieItem from "./MovieItem";

describe('MovieItem', () => {

    const movie = {
        title: 'Batman',
        releasedDate: '10-5-2015',
        isNew: true,
        imageUrl: 'https://via.placeholder.com/150',
        rating: 4
    };

    it('should display the title', () => {
        const wrapper = shallow(<MovieItem movie={movie}/>);
        expect(wrapper.find('[data-test="title"').text()).toEqual(movie.title);
    });

    it('should display the cover', () => {
        const wrapper = shallow(<MovieItem movie={movie}/>);
        expect(wrapper.containsMatchingElement(<img src={movie.imageUrl}/>)).toBe(true)
    });

    it('should display the rating', () => {

    });
});