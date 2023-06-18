import React from 'react';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import FollowMe from './Components/FollowMe';
import Portfolio from './Components/Portfolio';
import ScrollTop from './Components/ScrollTop';

const Container = () => {
    return (
        <div>
            <FollowMe></FollowMe>
            <ScrollTop></ScrollTop>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Container;