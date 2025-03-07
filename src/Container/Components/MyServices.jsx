import React, { useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const MyServices = () => {
    return (
        <div className='w-11/12 lg:w-3/4 overflow-hidden mx-auto pt-20 lg:pt-32' id='services'>
            <Slide direction='down'>
                <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>My Services</h1>
            </Slide>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                <Slide direction='left'>
                    <div data-aos="fade-right" className='cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#242424]'>
                        <h2 className="text-3xl font-semibold mb-6 primary-color">Frontend Development</h2>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Responsive design for optimal user experiences across devices and screen sizes</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Deep understanding of core concepts like HTML, CSS and Javascript</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Develope user interfaces by using popular framework ReactJS</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Build enhanced and performance optimized websites by using latest technologies</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Implemente performance optimization techniques for faster website loading</span></div>
                        <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensuring consistent performance across different web browsers</span></div>
                    </div>
                </Slide>
                <Slide direction='right'>
                    <div data-aos="fade-left" className='cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#242424]'>
                        <h2 className="text-3xl font-semibold mb-6 primary-color">Backend Development</h2>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Build server side application by using NodeJS and ExpressJS</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Design efficient database structures and utilizing systems by MongoDB</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Implement security measures to protect user data and prevent web vulnerabilities</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Develop RESTful APIs for frontend-backend communication</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Optimize backend infrastructure and code for scalability and high performance</span></div>
                        <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensure more security and safety by Using Environment Variables</span></div>
                    </div>
                </Slide>
                {/* <div className='border cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#181818] border-whtie'>
                    <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>UI/UX Design</h4>
                    <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create unique design with Adobe Illustrator and Figma</span></div>
                    <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Organize content for intuitive navigation and easy access</span></div>
                    <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create wireframes and prototypes for visualizing website structure and flow</span></div>
                    <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensure usability and accessibility by adhering to guidelines and best practices</span></div>
                    <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create wireframes and prototypes for visualizing website structure and flow</span></div>
                    <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Conduct user research and analysis to understand needs and preferences</span></div>
                </div> */}
            </div>
            <div className='bg-[url(/keyboard.jpg)] bg-fixed bg-cover mt-10 rounded-lg bg-center lg:bg-left-top'>
                <div data-aos="zoom-in" className='text-4xl flex gap-10 justify-center items-center text-white text-center lg:py-16 py-10'>
                    <FaQuoteLeft className='text-white mb-28 ml-4 text-6xl primary-color' />
                    <h1>Never stop learning, because life never stops teaching</h1>
                    <FaQuoteRight className='text-white mt-28 mr-4 text-6xl primary-color' />
                </div>
            </div>
        </div>
    );
};

export default MyServices;