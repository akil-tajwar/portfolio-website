import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { TiTick } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiAdobeillustrator } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";

const AboutMe = () => {
    const data = [
        {
            name: '40-49',
            uv: 12.63,
            pv: 3908,
            fill: '#159e53',
        }
    ];
    return (
        <div className='text-white lg:w-3/4 w-11/12 mx-auto py-20' id='about'>
            <h1 className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>About Me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <img className='rounded-lg' src="/my photo 2.jpg" alt="" />
                <div className=''>
                    <div>
                        <p className='pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe corrupti harum nam in blanditiis placeat ea error sit nulla nostrum cumque expedita praesentium, molestias vitae, odit cum ex illo!</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-10 mb-10'>
                        <div className='border flex flex-col justify-center items-center p-4 border-[#159e53] shadow rounded-lg w-full h-48'>
                            <IoLogoJavascript className='text-3xl p-1 mb-4 text-[#1c1c1c] primary-bg-color' />
                            <h4 className='text-2xl font-semibold'>Frontend</h4>
                            <p>15+ Projects</p>
                        </div>
                        <div className='border flex flex-col justify-center items-center p-4 border-[#159e53] shadow rounded-lg w-full h-48'>
                            <SiMongodb className='text-3xl p-1 mb-4 text-[#1c1c1c] primary-bg-color' />
                            <h4 className='text-2xl font-semibold'>Fullstack</h4>
                            <p>2+ Projects</p>
                        </div>
                        <div className='border flex flex-col justify-center items-center p-4 border-[#159e53] shadow rounded-lg w-full h-48'>
                            <DiIllustrator className='text-3xl mb-4 text-[#1c1c1c] primary-bg-color' />
                            <h4 className='text-2xl font-semibold'>UI/UX Designer</h4>
                            <p>10+ Projects</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='border border-[#159e53] p-4 shadow rounded-lg w-full'>
                            <h4 className='text-2xl font-semibold pb-5'>Frontend Tools</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />HTML5</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />CSS3</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Javascript</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />Bootstrap</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />ReactJS</li>
                            </ul>
                        </div>
                        <div className='border border-[#159e53] p-4 shadow rounded-lg w-full'>
                            <h4 className='text-2xl font-semibold pb-5'>Backend Tools</h4>
                            <ul className='grid grid-cols-2 gap-5'>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />NodeJS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />ExpressJS</li>
                                <li className='flex gap-2'><TiTick className='primary-color text-2xl' />MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ width: "50%", height: "400px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            minAngle={15}
                            label={{ position: 'insideStart', fill: '#8884d8' }}
                            background
                            clockWise
                            dataKey="uv"
                            startAngle={-180}
                            endAngle={0}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div> */}
        </div>
    );
};

export default AboutMe;