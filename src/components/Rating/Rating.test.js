import React from 'react'
import {shallow} from 'enzyme'
import Rating from "./Rating";

describe('Rating', () =>{

    const rating = 3;

    it('should display the rating', () => {
        const wrapper = shallow(<Rating rating={rating}/>);

    });
});