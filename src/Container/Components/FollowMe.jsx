import React from 'react';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FollowMe = () => {
    return (
        <div className='hidden lg:block'>
            <div className='fixed bottom-72 right-11 -rotate-90'>
                <div className='text-white bg-[#181818] py-1 px-3 shadow rounded-lg border border-[#159e53] mt-72 flex gap-10 flex-row justify-center items-center'>
                    <h4 className=''>Follow Me</h4>
                    <div className='text-[#159e53] text-xl flex flex-row gap-4'>
                        <a target='_blank' href="https://www.instagram.com/akil.tajwar/"><FaInstagram className='rotate-90 hover:text-white duration-200' /></a>
                        <a target='_blank' href="https://www.facebook.com/akiltajwar.chy/"><FaFacebookSquare className='rotate-90 hover:text-white duration-200' /></a>
                        <a target='_blank' href=""><FaLinkedin className='rotate-90 hover:text-white duration-200' /></a>
                        <a target='_blank' href="https://github.com/akil-tajwar"><FaGithubSquare className='rotate-90 hover:text-white duration-200' /></a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default FollowMe;