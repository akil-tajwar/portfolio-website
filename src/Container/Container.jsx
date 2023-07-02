import React from 'react';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import FollowMe from './Components/FollowMe';
import Portfolio from './Components/Portfolio';
import ScrollTop from './Components/ScrollTop';
import MyServices from './Components/MyServices';
import ContactMe from './Components/ContactMe';

const Container = () => {
    return (
        <div>
            <FollowMe></FollowMe>
            <ScrollTop></ScrollTop>
            <Banner></Banner>
            <AboutMe></AboutMe>
            {/* <MyResume></MyResume> */}
            <MyServices></MyServices>
            <Portfolio></Portfolio>
            {/* <Reviews></Reviews> */}
            <ContactMe></ContactMe>
        </div>
    );
};

export default Container;