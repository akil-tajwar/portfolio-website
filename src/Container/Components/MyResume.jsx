import React from 'react';

const MyResume = () => {
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto'>
            <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>My Resume</h1>
            <div className='flex gap-8'>
                <div>
                    <h4 className='text-2xl text-white font-semibold'>Experiences</h4>
                </div>
                <div>
                    <h4 className='text-2xl text-white font-semibold'>Education</h4>
                </div>
            </div>
        </div>
    );
};

export default MyResume;