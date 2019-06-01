import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Router} from "@reach/router";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";


function App() {
    return (
        <Router>
            <Home path="/"/>
            <Movie path="/movie/:movieId"/>
        </Router>
    );
}

export default App;
