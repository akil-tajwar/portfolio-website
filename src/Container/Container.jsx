import React from 'react';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import FollowMe from './Components/FollowMe';
import Portfolio from './Components/Portfolio';
import ScrollTop from './Components/ScrollTop';
import MyServices from './Components/MyServices';
import ContactMe from './Components/ContactMe';
import MyEducation from './Components/MyEducation';

const Container = () => {
    return (
        <div>
            {/* <FollowMe /> */}
            {/* <ScrollTop /> */}
            <Banner />
            <AboutMe />
            <MyEducation />
            <MyServices />
            <Portfolio />
            {/* <Reviews /> */}
            <ContactMe />
        </div>
    );
};

export default Container;