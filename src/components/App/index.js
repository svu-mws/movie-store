import React from 'react';
// import './App.module.scss'
import 'Resources/css/bootstrap.css';
import 'Resources/css/popuo-box.css';
import 'Resources/css/easy-responsive-tabs.css';
import 'Resources/css/zoomslider.css';
import 'Resources/css/style.css';

// import './zoomslider.scss'
import {useDispatch} from 'react-redux'
import {Router} from '@reach/router';
// import Header from "components/Header";
// import Footer from "components/Footer";
import Movie from "components/Movie";
// import Home from "components/Home"
// import ContactUs from "components/ContactUs";
// import FilterableMovies from "components/FilterableMovies";
// import FilteredMovies, {LayoutType} from "components/FilteredMovies";
import {GET_ALL_MOVIES} from "redux/actionTypes/moviesActionTypes"

const Main = ({children}) => {
    return (
        <>
            {/*<Header/>*/}
            {children}
            {/*<Footer/>*/}
        </>
    );
};

export default function App() {
    const dispatch = useDispatch();
    /*dispatch({
        type: GET_ALL_GENRES
    });
    */
    dispatch({
        type: GET_ALL_MOVIES
    });

    return (
        <Router>
            <Main path="/">
                {/*<Home path="/"/>*/}
                <Movie path="movies/:id"/>
                {/*<FilterableMovies path="movies/categories/:type" layoutType={LayoutType.GRID}/>*/}
                {/*<FilteredMovies path="movies/title/:title" layoutType={LayoutType.LINEAR}/>*/}
                {/*<ContactUs path="contact-us"/>*/}
                {/*// <!-- <Dashboard path="dashboard"/> -->*/}
            </Main>
        </Router>
    );
}
