import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const downloadResume = () => {
        const resumeUrl = 'Akil Tajwar Chowdhury - MERN Stack Web Developer (Resume).pdf';
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'Akil Tajwar Chowdhury - MERN Stack Web Developer (Resume).pdf'
        anchor.click();
    }
    return (
        <div>
            <div className='lg:bg-[url(/banner2.jpg)] bg-[url(/banner2-phone.jpg)] bg-cover bg-center lg:bg-left-top'>
                <div className='bg-gradient-to-r from-[#181818] lg:via-[#181818d6] justify-center items-center text-white'>
                    <div className='lg:w-3/4 w-11/12 mx-auto pt-64 pb-48 lg:pt-96 lg:pb-80'>
                        <h4 className='lg:text-2xl text-lg pb-5 font-bold'>I'm Akil Tajwar Chowdhury</h4>
                        <span className='lg:text-6xl md:text-5xl text-4xl font-bold primary-color'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'WEB DEVELOPER',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'GRAPHIC DESIGNER',
                                    1000
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                            />
                        </span>
                        <div>
                            <p className='lg:w-1/2 md:w-2/3 border-l-4 mb-3 mt-4 pl-5 primary-border-color flex'>I'm a fullstack web developer with expertise in ReactJS, MongoDB, Express, and NodeJS. Along with my development skills, I also have a strong knowledge of competitive programming.</p>
                        </div>
                        <button onClick={downloadResume} className='mt-3 bg-[#008f40] rounded font-semibold text-lg px-3 py-2'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;