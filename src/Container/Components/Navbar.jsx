import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                <div className='flex w-3/4 mx-auto justify-between items-center'>
                    <div className=''>
                        <img className='w-40' src="/logo 2.png" alt="" />
                    </div>
                    <div className='flex flex-row gap-9 font-semibold'>
                        <Link className='hover:text-[#159e53]' to={'/'}>Home</Link>
                        <Link className='hover:text-[#159e53]' to={'/contactus'}>About me</Link>
                        <Link className='hover:text-[#159e53]' to={'/dashboard'}>What I Do</Link>
                        <Link className='hover:text-[#159e53]' to={'/ourmenu'}>Portfolio</Link>
                        <Link className='hover:text-[#159e53]' to={'/ourshop'}>My Resume</Link>
                        <Link className='hover:text-[#159e53]' to={'/login'}>Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;