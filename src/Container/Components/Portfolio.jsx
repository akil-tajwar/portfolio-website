import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])
    return (
        <div className='w-11/12 lg:w-3/4 py-20 mx-auto' id='portfolio'>
            <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>Portfolio</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    portfolio.map(item => <div item={item} key={item._id}>
                        <div className='primary-bg-color p-3 rounded-lg'>
                            <img className='rounded-lg' src={item.image} alt="" />
                            <h3 className='text-2xl text-[#1c1c1c] pt-2 font-semibold'>{item.name}</h3>
                            <div className='text-center flex gap-5 justify-center mt-8'>
                                <button className='w-32 py-1 rounded border border-white text-white text-xl font-semibold'>Github</button>
                                <button className='w-32 py-1 rounded primary-color bg-white border border-white text-xl font-semibold'>Live Link</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;