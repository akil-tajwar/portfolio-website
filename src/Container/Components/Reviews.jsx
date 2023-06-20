import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Reviews = () => {
    return (
        <div className='w-3/4 mx-auto pb-20' id='reviews'>
            <h1 className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>Reviews</h1>
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
    );
};

export default Reviews;