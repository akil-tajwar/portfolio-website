import React from 'react';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FollowMe = () => {
    return (
        <div className='hidden md:hidden lg:block'>
            <div className='fixed right-0 top-56'>
                <div className='text-white bg-[#1c1c1c] py-1 px-3 shadow rounded-lg border border-[#159e53] -rotate-90 mt-72 flex gap-14 flex-row justify-center items-center'>
                    <h4 className=''>Follow Me</h4>
                    <div className='text-[#159e53] text-xl flex flex-row gap-4'>
                        <FaInstagram className='rotate-90' />
                        <FaFacebookSquare className='rotate-90' />
                        <FaLinkedin className='rotate-90' />
                        <FaGithubSquare className='rotate-90' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowMe;