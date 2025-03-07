import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState('#');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
    
            const aboutPosition = document.getElementById('about')?.offsetTop || 0;
            const educationPosition = document.getElementById('education')?.offsetTop || 0;
            const servicesPosition = document.getElementById('services')?.offsetTop || 0;
            const portfolioPosition = document.getElementById('portfolio')?.offsetTop || 0;
            const contactPosition = document.getElementById('contact')?.offsetTop || 0;
    
            const currentPosition = window.scrollY + window.innerHeight / 2;
    
            if (currentPosition < aboutPosition) {
                setActive('#');
            } else if (currentPosition < educationPosition) { // Fix order: Education should come after About
                setActive('#about');
            } else if (currentPosition < servicesPosition) { // Services should come after Education
                setActive('#education');
            } else if (currentPosition < portfolioPosition) { 
                setActive('#services');
            } else if (currentPosition < contactPosition) {
                setActive('#portfolio');
            } else {
                setActive('#contact');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className={isScrolled ? 'bg-[#181818] shadow fixed w-[100vw] z-10 text-white py-2' : `fixed w-[100vw] z-10 text-white py-4`}>
            <div className='flex flex-row gap-5 w-11/12 lg:w-3/4 mx-auto justify-between items-center'>
                <div className=''>
                    <img className='w-16' src="/logo 2.png" alt="" />
                </div>
                <div>
                    <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                        <FaBars className="h-8 w-8 text-white" />
                    </div>
                    <div className={`fixed lg:static p-6 lg:w-fit w-3/4 h-full text-right flex flex-col lg:flex-row lg:gap-10 lg:justify-center lg:items-center duration-500 ${open ? 'right-0 top-0 bg-[#181818] lg:bg-transparent' : 'overflow-hidden bg-transparent custom-space top-0'}`}>
                        <div className='flex justify-between mb-6 lg:mb-0 lg:hidden py-4 border-b-2 border-white'>
                            <div>
                                <img className='w-20' src="/logo 2.png" alt="" />
                            </div>
                            <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                                <RxCross2 className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <Link smooth to="#" className={active === "#" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#")}>Home</Link>
                        <Link smooth to="#about" className={active === "#about" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#about")}>About me</Link>
                        <Link smooth to="#education" className={active === "#education" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#education")}>My Education</Link>
                        <Link smooth to="#services" className={active === "#services" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#services")}>Services</Link>
                        <Link smooth to="#portfolio" className={active === "#portfolio" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#portfolio")}>Portfolio</Link>
                        <Link smooth to="#contact" className={active === "#contact" ? 'primary-color text-2xl mb-5 lg:mb-0 lg:text-lg' : 'text-2xl mb-5 lg:mb-0 lg:text-lg'} onClick={() => setActive("#contact")}>Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;