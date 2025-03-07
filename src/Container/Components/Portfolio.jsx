import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Change this as needed

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolio(data));
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(portfolio.length / itemsPerPage);

    // Get current page's items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = portfolio.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='w-11/12 lg:w-3/4 pt-20 lg:pt-32 mx-auto' id='portfolio'>
            <h1 className='text-center text-4xl mb-10 font-semibold primary-color'>My Portfolio</h1>
            
            {/* Portfolio Grid */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    currentItems.map(item => (
                        <div key={item._id}>
                            <div className='bg-[#242424] box shadow2 duration-300 p-3 rounded-lg'>
                                <img className='rounded-lg' src={item.image} alt={item.name} />
                                <div className='flex justify-between items-center pt-2'>
                                    <div>
                                        <h3 className='text-2xl primary-color font-bold'>{item.name}</h3>
                                        <p className='text-white'>{item.category}</p>
                                    </div>
                                    <a className='p-1 border-2 border-[#008f40] hover:border-white rounded' target='_blank' href={item.live_link} rel="noopener noreferrer">
                                        <button className='rounded text-[#1c1c1c] hover:text-white p-2 bg-[#159e53] duration-200 text-xl'>
                                            <FaArrowRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#159e53] hover:text-white'}`}
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-[#159e53] text-white' : 'hover:bg-[#159e53] hover:text-white'}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#159e53] hover:text-white'}`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
