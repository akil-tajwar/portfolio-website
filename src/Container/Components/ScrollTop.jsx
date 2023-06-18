import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    return (
        <div className='fixed right-5 bottom-5 cursor-pointer'>
            <div className='border border-[#159e53] text-white flex shadow justify-center items-center bg-[#1c1c1c] rounded-lg w-8 h-8'>
                <FaArrowUp/>
            </div>
        </div>
    );
};

export default ScrollTop;