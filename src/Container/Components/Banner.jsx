import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(/banner2.jpg)] bg-cover'>
                <div className='bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1cd6] justify-center items-center text-white'>
                    <div className='w-3/4 mx-auto pt-96 pb-80'>
                        <h4 className='text-xl pb-4 font-bold'>I'm Akil Tajwar Chowdhury</h4>
                        <h1 className='text-6xl font-bold pb-4 primary-color'>WEB DEVELOPER</h1>
                        <p className='w-1/2 border-l-4 mb-3 pl-5 primary-border-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nulla nostrum error voluptatibus consequatur in. Dicta facere ducimus ad alias hic voluptatibus consectetur facilis fugit, rerum reprehenderit quam perferendis sapiente.</p>
                        <button className='mt-4 primary-bg-color font-semibold text-2xl px-5 py-2'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;