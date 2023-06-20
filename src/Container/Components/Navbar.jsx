import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState('#')

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position and update the state accordingly
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=''>
            <div className={isScrolled ? 'bg-[#1c1c1c] fixed w-full z-10 text-white py-8' : `fixed w-full z-10 text-white py-8`}>
                <div className='flex flex-col lg:flex-row gap-5 w-11/12 lg:w-3/4 mx-auto justify-between items-center'>
                    <div className=''>
                        <img className='w-40' src="/logo 2.png" alt="" />
                    </div>
                    <div className='grid lg:grid-cols-6 grid-cols-3 gap-x-7 gap-y-3 lg:gap-9 font-semibold'>
                        <a href="#" className={ active === "#" ? 'active' : '' } onClick={ () => setActive("#") }>Home</a>
                        <a href="#about" className={ active === "#about" ? 'active' : '' } onClick={ () => setActive("#about") }>About me</a>
                        <a href="#services" className={ active === "#services" ? 'active' : '' } onClick={ () => setActive("#services") }>My Services</a>
                        <a href="#portfolio" className={ active === "#portfolio" ? 'active' : '' } onClick={ () => setActive("#portfolio") }>Portfolio</a>
                        <a href="#my-resume" className={ active === "#my-resume" ? 'active' : '' } onClick={ () => setActive("#my-resume") }>My Resume</a>
                        <a href="">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;