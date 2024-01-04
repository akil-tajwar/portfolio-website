import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])
    return (
        <div className='w-11/12 lg:w-3/4 pt-20 lg:pt-32 mx-auto' id='portfolio'>
            <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>Portfolio</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    portfolio.map(item => <div item={item} key={item._id}>
                        <div className='bg-[#242424] shadow2 duration-200 p-3 rounded-lg'>
                            <img className='rounded-lg' src={item.image} alt="" />
                            <div className='flex justify-between items-center pt-2'>
                                <div>
                                    <h3 className='text-2xl primary-color font-bold'>{item.name}</h3>
                                    <p className='text-white'>{item.category}</p>
                                </div>
                                <a target='_blank' href={item.live_link}><button className='rounded text-[#1c1c1c] p-3 bg-[#159e53] duration-200 text-xl font-bold'><AiOutlineArrowRight/></button></a>
                            </div>
                            {/* <div className='text-center mt-8'>
                                <div className='flex gap-3 justify-center'>
                                    <a href={item.client_repo} target='_blank' className='w-full py-1 rounded border-2 border-[#159e53] hover:border-white text-[#159e53] hover:text-white duration-200 text-xl font-semibold'><button>Client Side</button></a>
                                    <a href={item.server_repo} target='_blank' className='w-full py-1 rounded border-2 border-[#159e53] hover:border-white text-[#159e53] hover:text-white duration-200 text-xl font-semibold'><button >Server Side</button></a>
                                </div>
                                <div className='mt-3'>
                                    <a className='flex' target='_blank' href={item.live_link}><button className='w-full py-1 rounded text-[#1c1c1c] bg-[#159e53] hover:bg-white border-2 border-[#159e53] hover:border-white duration-200 text-xl font-semibold'>Live Link</button></a>
                                </div>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;