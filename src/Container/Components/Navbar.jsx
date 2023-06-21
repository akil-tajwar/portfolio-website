import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState('#');
    const [open, setOpen] = useState(false);

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
        <div className={isScrolled ? 'bg-[#1c1c1c] shadow fixed w-full z-10 text-white py-8' : `fixed w-full z-10 text-white py-8`}>
            <div className='flex flex-row gap-5 w-11/12 lg:w-3/4 mx-auto justify-between items-center'>
                <div className=''>
                    <img className='w-40' src="/logo 2.png" alt="" />
                </div>
                <div>
                    <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                        <FaBars className="h-8 w-8 text-white" />
                    </div>
                    <div className={`fixed lg:static p-6 lg:w-fit w-3/4 h-full text-right flex flex-col lg:flex-row lg:gap-10 lg:justify-center lg:items-center duration-500 ${open ? 'right-0 top-0 bg-[#181818] lg:bg-transparent' : 'overflow-hidden bg-transparent custom-space top-0'}`}>
                        <div className='flex justify-between mb-6 lg:mb-0 lg:hidden py-4 border-b-2 border-white'>
                            <div>
                                <img className='w-40' src="/logo 2.png" alt="" />
                            </div>
                            <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                                <RxCross2 className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <a href="#" className={active === "#" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#")}>Home</a>
                        <a href="#about" className={active === "#about" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#about")}>About me</a>
                        <a href="#services" className={active === "#services" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#services")}>My Services</a>
                        <a href="#portfolio" className={active === "#portfolio" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#portfolio")}>Portfolio</a>
                        <a href="#my-resume" className={active === "#my-resume" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#my-resume")}>My Resume</a>
                        <a href="#reviews" className={active === "#reviews" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#reviews")}>Reviews</a>
                        <a href="#contact" className={active === "#contact" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#contact")}>Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;