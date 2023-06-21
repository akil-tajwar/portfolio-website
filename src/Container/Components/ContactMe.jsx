import React from 'react';

const ContactMe = () => {
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto pb-20' id='contact'>
            <h1 className='text-center text-4xl pb-10 font-semibold primary-color'>Contact Me</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                <div className=''>
                    <h3 className='text-xl text-white mb-10'>For any inquiries feel free to ask me. Or you can always reach out on my in my social accounts.</h3>
                    <div className='flex gap-5 text-white mb-5'>
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' type="text" placeholder='First Name' />
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' type="text" placeholder='Last Name' />
                        {/* <input className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white' type="text" placeholder='Your Phone' /> */}
                    </div>
                    <div className='flex gap-5 text-white'>
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' type="text" placeholder='Email Address' />
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' type="text" placeholder='Phone Number' />
                        {/* <input className='bg-[#181818] rounded-md w-full px-4 py-2 border border-white' type="text" placeholder='Your Phone' /> */}
                    </div>
                    <textarea className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white mt-5' placeholder='Your Message' cols="30" rows="5"></textarea>
                    <div className='text-right'>
                        <button className='mt-3 bg-[#008f40] text-white rounded font-semibold text-xl px-5 py-2'>Let's talk</button>
                    </div>
                </div>
                <div className='hidden md:hidden lg:block'>
                    <img className='' src="/message.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;