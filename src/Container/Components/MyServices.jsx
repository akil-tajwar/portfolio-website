import React from 'react';
import { TiTick } from "react-icons/ti";

const MyServices = () => {
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto' id='services'>
            <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <div className='border cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#181818] border-whtie'>
                        <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>Fontend Development</h4>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Responsive design for optimal user experiences across devices and screen sizes</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Deep understanding of core concepts like HTML, CSS and Javascript</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Develope user interfaces by using popular framework ReactJS</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Build enhanced and performance optimized websites by using latest technologies</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Implemente performance optimization techniques for faster website loading</span></div>
                        <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensuring consistent performance across different web browsers</span></div>
                    </div>
                </div>
                <div>
                    <div className='border cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#181818] border-whtie'>
                        <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>Backend Development</h4>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Build server side application by using NodeJS and ExpressJS</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Design efficient database structures and utilizing systems by MongoDB</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Implement security measures to protect user data and prevent web vulnerabilities</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Develop RESTful APIs for frontend-backend communication</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Optimize backend infrastructure and code for scalability and high performance</span></div>
                        <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensure more security and safety by Using Environment Variables</span></div>
                    </div>
                </div>
                <div>
                    <div className='border cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#181818] border-whtie'>
                        <h4 className='rounded-lg px-3 py-2 font-semibold mb-5 bg-[#008f40] text-white text-2xl'>UI/UX Design</h4>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create unique design with Adobe Illustrator and Figma</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Organize content for intuitive navigation and easy access</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create wireframes and prototypes for visualizing website structure and flow</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Ensure usability and accessibility by adhering to guidelines and best practices</span></div>
                        <div className='flex gap-2 pb-3 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Create wireframes and prototypes for visualizing website structure and flow</span></div>
                        <div className='flex gap-2 text-white'><TiTick className='text-2xl absolute primary-color' /><span className='pl-8'>Conduct user research and analysis to understand needs and preferences</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;