import React, { useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className='text-white lg:w-3/4 w-11/12 mx-auto pt-20 lg:pt-32' id='about'>
            <h1 data-aos="fade-down" className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>About Me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div data-aos="fade-right">
                    <img className='rounded-lg' src="/my photo 2.jpg" alt="" />
                </div>
                <div className=''>
                    <div data-aos="fade-left">
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe corrupti harum nam in blanditiis placeat ea error sit nulla nostrum cumque expedita praesentium, molestias vitae, odit cum ex illo!</p>
                    </div>
                    <div data-aos="fade-left" className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-10 my-10'>
                        <div className='border cursor-default flex flex-col duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <IoLogoJavascript className='text-3xl p-1 mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-center text-white font-semibold'>Frontend</h4>
                            <p>15+ Projects</p>
                        </div>
                        <div className='border cursor-default flex flex-col duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <SiMongodb className='text-3xl p-1 mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-center text-white font-semibold'>Fullstack</h4>
                            <p>2+ Projects</p>
                        </div>
                        <div className='border cursor-default flex flex-col duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <DiIllustrator className='text-3xl mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-center text-white font-semibold'>UI/UX Design</h4>
                            <p>10+ Projects</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='grid lg:grid-cols-2 pt-10 md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='border cursor-default border-white bg-[#181818] p-4 shadow2 duration-200 rounded-lg w-full'>
                            <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>Frontend Tools</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>HTML5</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>CSS3</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>Javascript</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>TailwindCSS</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>Bootstrap</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>ReactJS</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>Firebase</span></li>
                            </ul>
                        </div>
                        <div className='border cursor-default border-white bg-[#181818] p-4 shadow2 duration-200 rounded-lg w-full'>
                            <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>Backend Tools</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>NodeJS</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>ExpressJS</span></li>
                                <li className='flex gap-2'><TiTick className='primary-color absolute text-2xl' /><span className='pl-8'>MongoDB</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;