import React from 'react'
import {shallow} from 'enzyme'
import Star from "./Star";

describe('Star', () => {
    it('should be filled if fill is true', () => {
        const fill = true;
        const wrapper = shallow(<Star fill={fill}/>);
        expect(wrapper.find('[data-test="star"]').hasClass('fa fa-star')).toBeTruthy()
    });

    it('should be not filled if fill is not true', () => {
        const fill = false;
        const wrapper = shallow(<Star fill={fill}/>);
        expect(wrapper.find('[data-test="star"]').hasClass('fa fa-star-o')).toBeTruthy()
    });
});