import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(/banner.jpg)] bg-cover'>
                <div className='bg-black bg-opacity-80 grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center text-white lg:p-20 p-8'>
                    <div className='w-3/4 mx-auto'>
                        <h4 className='pb-96 text-xl'>hello</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;