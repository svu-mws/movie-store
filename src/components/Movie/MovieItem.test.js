import React from 'react';
import {shallow, render} from 'enzyme';
import MovieItem from "./MovieItem";

describe('MovieItem', () => {
    it('should render without crashing', () => {
        const movie = {
            title: 'Batman',
            releasedDate: '10-5-2015',
            isNew: true,
            imageUrl: 'https://via.placeholder.com/150',
            rating: 4
        };
        const movieItem = shallow(<MovieItem movie={movie}/>);
    })
});