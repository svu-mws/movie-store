import React from 'react';
import {Provider} from 'react-redux'
import {Router} from '@reach/router';
import configureStore from '/src/store';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
            </Router>
        </Provider>
    );
}

export default App;
