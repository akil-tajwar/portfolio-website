import React from 'react';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FollowMe = () => {
    return (
        <div className='text-white -rotate-90 mt-72 top-56 flex gap-16 flex-row justify-center items-center fixed'>
            <h4 className=''>Follow Me</h4>
            <div className='text-[#159e53] text-xl flex flex-row gap-4'>
                <FaInstagram className='rotate-90'/>
                <FaFacebookSquare className='rotate-90'/>
                <FaLinkedin className='rotate-90'/>
                <FaGithubSquare className='rotate-90'/>
            </div>
        </div>
    );
};

export default FollowMe;