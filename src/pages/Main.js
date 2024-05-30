import React from 'react';
import Competences from '../components/Competences';
import Contact from '../components/Contact';
import Ending from '../components/Ending';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Profile from '../components/Profile';

const Main = (props) => {
    return (
        <>
            <Navigation/>
            <Home/>
            <Profile/>
            <Competences/>
            <Portfolio/>
            <Contact/>
            <Ending/>
        </>
    );
};

export default Main;