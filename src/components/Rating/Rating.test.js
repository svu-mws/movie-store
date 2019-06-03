import React from 'react'
import {shallow, mount} from 'enzyme'
import Index from "components/Rating/index";
import Star from "components/Rating/Star/Star";

describe('Index', () => {
    it('should display the rating', () => {
        const rating = 3;
        const wrapper = shallow(<Index rating={rating}/>);
        expect(wrapper.find(Star).findWhere(comp => comp.prop('fill') === true)).toHaveLength(rating)
    });
});