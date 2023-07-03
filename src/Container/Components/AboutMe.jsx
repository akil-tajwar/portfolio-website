import React, { useEffect } from 'react';
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { SiMongodb } from "react-icons/si";

const AboutMe = () => {
    return (
        <div className='text-white lg:w-3/4 w-11/12 mx-auto pt-20 lg:pt-32' id='about'>
            <h1 className='text-center text-4xl mb-10 font-semibold text-[#159e53]'>About Me</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10'>
                <div className='hidden lg:block md:block'>
                    <img className='rounded-lg' src="/my photo 2.jpg" alt="" />
                </div>
                <div className='col-span-2'>
                    <div className=''>
                        <div className='pb-5 flex justify-between border-b-2 border-white'>
                            <div>
                                <h2 className='lg:text-3xl text-xl pb-1 font-semibold'>Akil Tajwar Chowdhury</h2>
                                <h4 className='lg:text-xl font-semibold'>MERN Developer</h4>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='text-6xl primary-color font-semibold'>8</h1>
                                <div className='text-xl'>
                                    <p>months</p>
                                    <p>experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:hidden block md:hidden pt-10'>
                            <img className='rounded-lg' src="/my photo 2.jpg" alt="" />
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10'>
                            <div>
                                <p className='text-justify'>Hello there! I am Akil Tajwar Chowdhury, a fullstack web developer with expertise in ReactJS, MongoDB, Express, and NodeJS. I'm specialized in building scalable and responsive web applications accroding to business needs. With proper knowledge in frontend development using ReactJS, I can create interactive and user-friendly interfaces. On the backend, I use MongoDB, Express, and NodeJS to design efficient databases, implement RESTful APIs, and develop server-side logic. I also have a strong foundation in competitive programming and a passion for staying updated with the latest industry trends.</p>
                            </div>
                            <div className='hidden lg:block'>
                                <div className=''>
                                    <div className='pb-5'>
                                        <h2 className="text-2xl font-semibold pb-4 primary-color">EDUCATION</h2>
                                        <p>B.Sc Honours (4th year) in Computer Science & Engineering</p>
                                        <p>International Islamic University Chittagong</p>
                                    </div>
                                    <div className=''>
                                        <h2 className="text-2xl font-semibold pb-4 primary-color">LANGUAGES</h2>
                                        <ol>
                                            <li>Bengali - Native</li>
                                            <li>English - Conversational</li>
                                            <li>Hindi - Fluent</li>
                                            <li>Spanish - Very basic</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block lg:hidden pt-10'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='pb-5 md:col-span-2'>
                        <h2 className="text-2xl font-semibold pb-4 primary-color">EDUCATION</h2>
                        <p>B.Sc Honours (4th year) in Computer Science & Engineering</p>
                        <p>International Islamic University Chittagong</p>
                    </div>
                    <div className=''>
                        <h2 className="text-2xl font-semibold pb-4 primary-color">LANGUAGES</h2>
                        <ol>
                            <li>Bengali - Native</li>
                            <li>English - Conversational</li>
                            <li>Hindi - Fluent</li>
                            <li>Spanish - Very basic</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                <div className='lg:col-span-2'>
                    <h2 className="text-2xl font-semibold pb-8 primary-color">SKILLS</h2>
                    <p className='flex flex-wrap gap-5'>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>HTML5</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>CSS3</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>Tailwind CSS</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>Bootstrap</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>JavaScript</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>ES6</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>ReactJS</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>Firebase</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>Express</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>MongoDB</span>
                        <span className='bg-[#242424] cursor-default shadow2 duration-500 px-4 py-2 rounded-md'>NodeJS</span>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-6 primary-color">TOOLS</h2>
                    <div className='flex flex-wrap gap-5'>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 3v18l4 -2.5v-13z"></path><path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141"></path><path d="M16 16.5l-11 -10l-2 1l13 13.5"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.13 9.68 22 11.8v-.11c-.07-.24-.28-.45-.7-.87l-2-2-2.07.87zM12.2 7.24a1.31 1.31 0 0 1 .16.47l3 1.29a1.11 1.11 0 0 1 .29-.14l.48-3-2-2-1.95 3.3s0 .05.02.08zM10.61 7a1.1 1.1 0 0 1 1-.2h.05l2.16-3.34-.66-.66c-.42-.42-.63-.63-.87-.7a1 1 0 0 0-.63 0c-.24.07-.45.28-.87.7l-3 3c.31.14 2.5 1.06 2.78 1.19zm-3.12 5.29h.27a1.45 1.45 0 0 1 .29 0l2.38-3.68v-.06a1 1 0 0 1-.27-.95L9 7l-1.7-.73L5 8.61l2.51 3.66zm7.62-2.44v-.08a.59.59 0 0 1 0-.14l-2.86-1.27h-.05a1.05 1.05 0 0 1-.88.47h-.17s-.05 0-.06.05L8.73 12.5v.05l6.33-2.7s.05.02.05 0zm1.36-.91a.83.83 0 0 1 .26.19l2-.84-1.89-1.87-.4 2.47zm-2.29 5.54A.91.91 0 0 1 15 14v-.05l.54-3.37-.09-.08L9 13.15a2.76 2.76 0 0 1 .08.27zM2 11.95zm12.14 3.18L8.92 14v.06L13.47 21l.42-.43c.15-.92.71-4.33.78-4.72a.9.9 0 0 1-.53-.72zm1.65.32a.88.88 0 0 1-.36.27l-.64 3.94L18.43 16zm1.07-5.13a.07.07 0 0 0-.06 0 .92.92 0 0 1-.61.34v.06l-.55 3.4a.88.88 0 0 1 .34.62h.06l2.95.61 2.28-2.28a4.22 4.22 0 0 0 .65-.74zM8.3 14.59a1.27 1.27 0 0 1-.86 0l-1.22 1.9 4.69 4.68a2.68 2.68 0 0 0 .87.71 1 1 0 0 0 .63 0 1.86 1.86 0 0 0 .7-.54l-4.69-6.8zm4.71 6.82zm-6.62-7.82s.06 0 .06-.05 0 0-.06 0l-4.14-.86a7.07 7.07 0 0 0 .51.54l1.36 1.36 2.27-1zm.28-.66a1.05 1.05 0 0 1 .2-.27v-.06C6.1 11.4 5.3 10.24 4.5 9.07l-1.75 1.75c-.42.42-.63.63-.7.87A.75.75 0 0 0 2 12l4.67 1zm.17 1.33a.61.61 0 0 1-.07-.1L4.59 15l1.08 1.1 1.17-1.82s.01-.02 0-.02z"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"></path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path display="inline" d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167 h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524 c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363 c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936 C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216 c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7 c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496 l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618 c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95 c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171 C202.979,165.323,221.8,179.803,221.8,206.95z"> </path></svg></div>
                        <div class="bg-[#242424] shadow2 duration-500 p-5 rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"></path></svg></div>   
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 my-10'>
                <div className='border cursor-default duration-500 bg-[#242424] items-center p-4 border-[#242424] shadow2 rounded-lg w-full'>
                    <LuMonitorSmartphone className='text-7xl rounded-md p-3 mb-4 text-white bg-[#159e533c]' />
                    <h4 className='text-2xl pb-4 text-[#159e53] font-semibold'>Completely responsive websites for all screen sizes</h4>
                    <p>Creating websites that adapt and provide optimal user experiences across devices and screen sizes through responsive design techniques.</p>
                </div>
                <div className='border cursor-default duration-500 bg-[#242424] items-center p-4 border-[#242424] shadow2 rounded-lg w-full'>
                    <SiMongodb className='text-7xl rounded-md p-3 mb-4 text-white bg-[#159e533c]' />
                    <h4 className='text-2xl pb-4 text-[#159e53] font-semibold'>Websites, that have unique and engaging design</h4>
                    <p> Creating visually appealing and captivating designs that leave a lasting impression on visitors, fostering a positive user experience.</p>
                </div>
                <div className='border cursor-default duration-500 bg-[#242424] items-center p-4 border-[#242424] shadow2 rounded-lg w-full'>
                    <MdOutlineSpeed className='text-7xl rounded-md p-3 mb-4 text-white bg-[#159e533c]' />
                    <h4 className='text-2xl pb-4 text-[#159e53] font-semibold'>High performance Websites with best navigation</h4>
                    <p>Delivering high-performance websites with seamless navigation for exceptional user experiences and efficient access to information.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;