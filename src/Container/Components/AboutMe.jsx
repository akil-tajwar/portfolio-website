import React from 'react';
import { TiTick } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";

const AboutMe = () => {
    return (
        <div className='text-white lg:w-3/4 w-11/12 mx-auto py-20' id='about'>
            <h1 className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>About Me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <img className='rounded-lg' src="/my photo 2.jpg" alt="" />
                <div className=''>
                    <div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe corrupti harum nam in blanditiis placeat ea error sit nulla nostrum cumque expedita praesentium, molestias vitae, odit cum ex illo!</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-10 mb-10'>
                        <div className='border cursor-default flex flex-col mt-10 hover:mt-7 duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <IoLogoJavascript className='text-3xl p-1 mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-white font-semibold'>Frontend</h4>
                            <p>15+ Projects</p>
                        </div>
                        <div className='border cursor-default flex flex-col mt-10 hover:mt-7 duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <SiMongodb className='text-3xl p-1 mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-white font-semibold'>Fullstack</h4>
                            <p>2+ Projects</p>
                        </div>
                        <div className='border cursor-default flex flex-col mt-10 hover:mt-7 duration-500 justify-center bg-[#008f40] items-center p-4 border-[#159e53] shadow2 rounded-lg w-full h-48'>
                            <DiIllustrator className='text-3xl mb-4 text-[#138546] bg-[#1c1c1c]' />
                            <h4 className='text-2xl text-white font-semibold'>UI/UX Design</h4>
                            <p>10+ Projects</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 pt-10 md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='border cursor-default border-[#159e53] bg-[#181818] p-4 shadow2 duration-200 rounded-lg w-full'>
                            <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>UI/UX Design</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />HTML5</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />CSS3</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Javascript</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Tailwind CSS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Bootstrap</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />ReactJS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Firebase</li>
                            </ul>
                        </div>
                        <div className='border cursor-default border-[#159e53] bg-[#181818] p-4 shadow2 duration-200 rounded-lg w-full'>
                            <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>UI/UX Design</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />NodeJS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />ExpressJS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;