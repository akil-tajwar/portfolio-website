import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyResume = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto pt-20 lg:pt-32 mb-20' id='my-resume'>
            <h1 data-aos="fade-down" className='text-center text-4xl mb-10 font-semibold primary-color'>My Education</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {/* <div data-aos="fade-right" className='text-white'>
                    <h4 className='text-2xl pb-8 font-semibold'>Experiences</h4>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>1</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>2</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>3</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                </div> */}
                <div data-aos="fade-right" className='hidden w-11/12 lg:block'>
                    <img className='w-full' src="/education.svg" alt="" />
                </div>
                <div data-aos="fade-left" className='text-white'>
                    {/* <h4 className='text-2xl pb-8 pt-10 lg:pt-0 font-semibold'>Education</h4> */}
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>1</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2015-2016</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>SSC</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Ispahani Public School & College</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>2</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2016-2018</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>HSC</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Kajem Ali College</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>3</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>B.Sc in CSE</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Internaitonal Islamic University Chittagong</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyResume;