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
                        <div className={`fixed lg:static p-6 lg:w-fit w-3/4 h-full text-right flex flex-col lg:flex-row lg:gap-10 lg:justify-center lg:items-center duration-500 ${open ? 'right-0 top-0 bg-[#181818]' : 'overflow-hidden custom-space top-0'}`}>
                            <div className='flex justify-between lg:hidden'>
                                <div>
                                    <h2 className='text-2xl'>Menu</h2>
                                </div>
                                <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                                    <RxCross2 className="h-8 w-8 text-white" />
                                </div>
                            </div><hr />
                            <a href="#" className={active === "#" ? 'active' : ''} onClick={() => setActive("#")}>Home</a>
                            <a href="#about" className={active === "#about" ? 'active' : ''} onClick={() => setActive("#about")}>About me</a>
                            <a href="#services" className={active === "#services" ? 'active' : ''} onClick={() => setActive("#services")}>My Services</a>
                            <a href="#portfolio" className={active === "#portfolio" ? 'active' : ''} onClick={() => setActive("#portfolio")}>Portfolio</a>
                            <a href="#my-resume" className={active === "#my-resume" ? 'active' : ''} onClick={() => setActive("#my-resume")}>My Resume</a>
                            <a href="#reviews" className={active === "#reviews" ? 'active' : ''} onClick={() => setActive("#reviews")}>Reviews</a>
                            <a href="#contact" className={active === "#contact" ? 'active' : ''} onClick={() => setActive("#contact")}>Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;