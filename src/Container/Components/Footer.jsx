import React from 'react';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='shadow bg-[#181818] text-center py-3 mt-20'>
            <div className='text-[#159e53] text-xl lg:hidden flex flex-row gap-4 justify-center pb-3'>
                <FaInstagram className='hover:text-white duration-200' />
                <FaFacebookSquare className='hover:text-white duration-200' />
                <FaLinkedin className='hover:text-white duration-200' />
                <FaGithubSquare className='hover:text-white duration-200' />
            </div>
            <p className='text-white'>© Copyright 2023 | All rights reserved</p>
        </div>
    );
};

export default Footer;