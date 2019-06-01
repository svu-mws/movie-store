import React from 'react'
import {shallow, mount} from 'enzyme'
import Rating from "./Rating";
import Star from "./Star";

describe('Rating', () => {
    it('should display the rating', () => {
        const rating = 3;
        const wrapper = shallow(<Rating rating={rating}/>);
        expect(wrapper.find(Star).findWhere(comp => comp.prop('fill') === true)).toHaveLength(rating)
    });
});