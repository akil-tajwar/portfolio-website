import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className='w-11/12 lg:w-3/4 pt-20 lg:pt-32 mx-auto' id='portfolio'>
            <h1 data-aos="fade-down" className='text-center text-4xl mb-10 font-semibold primary-color'>Portfolio</h1>
            <div data-aos="fade-up" className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    portfolio.map(item => <div item={item} key={item._id}>
                        <div className='bg-[#181818] border-white shadow2 duration-200 border p-3 rounded-lg'>
                            <img className='rounded-lg' src={item.image} alt="" />
                            <h3 className='text-2xl primary-color pt-2 font-bold'>{item.name}</h3>
                            <p className='text-white'>{item.category}</p>
                            <div className='text-center flex gap-5 justify-center mt-8'>
                                <button className='w-32 py-1 rounded border-2 border-[#159e53] hover:border-white text-[#159e53] hover:text-white duration-200 text-xl font-semibold'>Github</button>
                                <button className='w-32 py-1 rounded text-[#1c1c1c] bg-[#159e53] hover:bg-white border-2 border-[#159e53] hover:border-white duration-200 text-xl font-semibold'>Live Link</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;