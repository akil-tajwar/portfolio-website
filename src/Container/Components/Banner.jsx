import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(/banner2.jpg)] bg-cover'>
                <div className='bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1cd6] justify-center items-center text-white'>
                    <div className='lg:w-3/4 w-11/12 mx-auto pt-96 pb-80'>
                        <h4 className='text-xl pb-5 font-bold'>I'm Akil Tajwar Chowdhury</h4>
                        <span className='lg:text-6xl text-5xl font-bold primary-color'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'WEB DEVELOPER',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'UI/UX DESIGNER',
                                    1000,
                                    'PHOTOGRAPHER',
                                    1000
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                            />
                        </span>
                        <div>
                            <p className='lg:w-1/2 md:w-2/3 border-l-4 mb-3 mt-4 pl-5 primary-border-color flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nulla nostrum error voluptatibus consequatur in. Dicta facere ducimus ad alias hic voluptatibus consectetur facilis fugit, rerum reprehenderit quam perferendis sapiente.</p>
                        </div>
                        <button className='mt-3 primary-bg-color rounded font-semibold text-xl px-5 py-2'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;