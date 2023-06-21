import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='lg:w-3/4 w-11/12 mx-auto pt-20 lg:pt-32' id='reviews'>
            <h1 data-aos="fade-down" className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>Reviews</h1>
            <div data-aos="zoom-in">
                <Carousel className=' rounded-lg text-center'>
                    <div className='bg-[#181818] border border-white rounded-lg py-10'>
                        <div className='w-40 h-40 relative text-center mx-auto'>
                            <img className='rounded-full w-full h-full object-cover border-2 border-[#138546] text-center' src="/review 1.jpg" alt="" />
                        </div>
                        <h4 className='text-4xl font-semibold py-4 primary-color'>Demo Name</h4>
                        <p className='text-white lg:text-center text-justify w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem dicta at cumque voluptatibus labore, aspernatur sed ipsam eaque fugit nesciunt nisi veniam temporibus excepturi exercitationem corrupti, reprehenderit pariatur architecto.</p>
                    </div>
                    <div className='bg-[#181818] border border-white rounded-lg py-10'>
                        <div className='w-40 h-40 relative text-center mx-auto'>
                            <img className='rounded-full w-full h-full object-cover border-2 border-[#138546] text-center' src="/review 2.jpg" alt="" />
                        </div>
                        <h4 className='text-4xl font-semibold py-4 primary-color'>Demo Name</h4>
                        <p className='text-white lg:text-center text-justify w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem dicta at cumque voluptatibus labore, aspernatur sed ipsam eaque fugit nesciunt nisi veniam temporibus excepturi exercitationem corrupti, reprehenderit pariatur architecto.</p>
                    </div>
                    <div className='bg-[#181818] border border-white rounded-lg py-10'>
                        <div className='w-40 h-40 relative text-center mx-auto'>
                            <img className='rounded-full w-full h-full object-cover border-2 border-[#138546] text-center' src="/review 3.jpg" alt="" />
                        </div>
                        <h4 className='text-4xl font-semibold py-4 primary-color'>Demo Name</h4>
                        <p className='text-white lg:text-center text-justify w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem dicta at cumque voluptatibus labore, aspernatur sed ipsam eaque fugit nesciunt nisi veniam temporibus excepturi exercitationem corrupti, reprehenderit pariatur architecto.</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Reviews;