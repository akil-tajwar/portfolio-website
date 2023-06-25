import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css';
const resumeUrl = 'http://localhost:5173/Akil Tajwar Chowdhury - MERN Stack Web Developer (Resume).pdf';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const downloadResume = (url) => {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([]))
                const filename = url.split('/').pop();
                const aTag = document.createElement('a');
                aTag.href = blobURL;
                aTag.setAttribute('download', filename);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
    }
    return (
        <div>
            <div className='lg:bg-[url(/banner2.jpg)] bg-[url(/banner2-phone.jpg)] bg-cover bg-center lg:bg-left-top'>
                <div className='bg-gradient-to-r from-[#1c1c1c] lg:via-[#1c1c1cd6] justify-center items-center text-white'>
                    <div data-aos="fade-right" className='lg:w-3/4 w-11/12 mx-auto pt-64 pb-48 lg:pt-96 lg:pb-80'>
                        <h4 className='lg:text-2xl text-lg pb-5 font-bold'>I'm Akil Tajwar Chowdhury</h4>
                        <span className='lg:text-6xl md:text-5xl text-4xl font-bold primary-color'>
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
                        <button onClick={() => downloadResume(resumeUrl)} className='mt-3 bg-[#008f40] rounded font-semibold text-lg px-3 py-2'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;