import React from 'react';
import {shallow, render} from 'enzyme';
import App from "./App";

describe('App', () => {
    it('should render without crashing', () => {
        const app = render(<App/>);
    })
});