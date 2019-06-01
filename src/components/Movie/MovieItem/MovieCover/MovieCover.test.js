import React from 'react'
import {shallow} from 'enzyme'
import MovieCover from "components/Movie/MovieItem/MovieCover/MovieCover";

describe('Movie Cover', () => {
    it('should display the cover', () => {
        const imageUrl = 'https://via.placeholder.com/150';
        const wrapper = shallow(<MovieCover imageUrl={imageUrl}/>);
        expect(wrapper.containsMatchingElement(<img src={imageUrl}/>)).toBeTruthy();
    });
});