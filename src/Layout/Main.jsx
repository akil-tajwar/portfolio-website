import React from 'react';
import Navbar from '../Container/Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Container/Components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;