import React from 'react';
import './App.module.scss'
import './popup-box.scss'
import './zoomslider.scss'
import {Provider} from 'react-redux'
import {Router} from '@reach/router';
import store from 'store';

function App() {
    return (
        <Provider store={store}>
            <Router>
            </Router>
        </Provider>
    );
}

export default App;
