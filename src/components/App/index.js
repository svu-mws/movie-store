import React from 'react';
import './App.module.scss'
import './popup-box.scss'
import './zoomslider.scss'
import {Provider} from 'react-redux'
import {Router} from '@reach/router';
import store from 'store';
import Header from "components/Header";
import Footer from "components/Footer";
import Movie from "components/Movie";
import Home from "components/Home"
import ContactUs from "components/ContactUs";
import FilterableMovies from "components/FilterableMovies";
import FilteredMovies, {LayoutType} from "components/FilteredMovies";

const Main = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Main path="/">
                    <Home path="/"/>
                    <Movie path="movies/:id"/>
                    <FilterableMovies path="movies/categories/:type" layoutType={LayoutType.GRID}/>
                    <FilteredMovies path="movies/title/:title" layoutType={LayoutType.LINEAR}/>
                    <ContactUs path="contact-us"/>
                    <!-- <Dashboard path="dashboard"/> -->
                </Main>
            </Router>
        </Provider>
    );
}
