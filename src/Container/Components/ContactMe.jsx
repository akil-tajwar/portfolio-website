import React from 'react';

const ContactMe = () => {
    return (
        <div className='w-11/12 lg:w-1/2 mx-auto pb-20' id='contact'>
            <h1 className='text-center text-4xl pb-10 font-semibold primary-color'>Contact Me</h1>
            <div className='flex gap-5 text-white'>
                <input className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white' type="text" placeholder='Your Name' />
                <input className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white' type="text" placeholder='Your Email' />
                <input className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white' type="text" placeholder='Your Phone' />
            </div>
            <textarea className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white mt-5' placeholder='Your Message' cols="30" rows="10"></textarea>
            <div className='text-right'>
                <button className='mt-3 bg-[#008f40] text-white rounded font-semibold text-xl px-5 py-2'>Let's talk</button>
            </div>
        </div>
    );
};

export default ContactMe;