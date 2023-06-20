import React from 'react';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import FollowMe from './Components/FollowMe';
import Portfolio from './Components/Portfolio';
import ScrollTop from './Components/ScrollTop';
import MyServices from './Components/MyServices';
import MyResume from './Components/MyResume';
import Reviews from './Components/Reviews';
import ContactMe from './Components/ContactMe';

const Container = () => {
    return (
        <div>
            <FollowMe></FollowMe>
            <ScrollTop></ScrollTop>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyServices></MyServices>
            <Portfolio></Portfolio>
            <MyResume></MyResume>
            <Reviews></Reviews>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Container;