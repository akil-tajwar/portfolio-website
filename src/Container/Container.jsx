import React from 'react';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import FollowMe from './Components/FollowMe';

const Container = () => {
    return (
        <div>
            <FollowMe></FollowMe>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Container;