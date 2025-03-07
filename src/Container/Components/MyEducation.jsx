import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-awesome-reveal";

const MyEducation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="w-11/12 lg:w-3/4 mx-auto pt-20 lg:pt-32 mb-20"
      id="education"
    >
      <Slide direction="down">
        <h1
          data-aos="fade-down"
          className="text-center text-4xl mb-10 font-semibold primary-color"
        >
          My Education
        </h1>
      </Slide>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* <div data-aos="fade-right" className='text-white'>
                    <h4 className='text-2xl pb-8 font-semibold'>Experiences</h4>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>1</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>2</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center'>
                            <h3 className='rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2'>3</h3>
                            <h4 className='py-1 pl-3 w-full text-white font-semibold'>2020-now</h4>
                        </div>
                        <div className='pl-8 ml-4 pt-8 pb-12 border-l-2 border-white'>
                            <h3 className='text-2xl font-semibold'>Senior Developer</h3>
                            <h4 className='mb-4 primary-color font-semibold'>Nexas IT Institute</h4>
                            <p className='text-justify lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae rerum culpa molestias consequuntur. Illo atque velit voluptatem veniam nam?</p>
                        </div>
                    </div>
                </div> */}
        <Slide direction="left" className="hidden w-11/12 lg:block">
          <img className="w-full" src="/education.svg" alt="" />
        </Slide>
        <Slide direction="right">
          <div className="text-white">
            <div className="">
              <div className="flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center">
                <h3 className="rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2">
                  1
                </h3>
                <h4 className="py-1 pl-3 w-full text-white font-semibold">
                  2015-2016
                </h4>
              </div>
              <div className="pl-8 ml-4 pt-8 pb-12 border-l-2 border-white">
                <h3 className="text-2xl font-semibold">SSC</h3>
                <h4 className="mb-4 primary-color font-semibold">
                  Ispahani Public School & College
                </h4>
                <p className="text-justify lg:text-left">
                  Completed secondary education with a strong focus on science.
                  Developed foundational knowledge in mathematics, physics, and
                  computer science. Achieved excellent academic performance and
                  actively participated in extracurricular activities.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center">
                <h3 className="rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2">
                  2
                </h3>
                <h4 className="py-1 pl-3 w-full text-white font-semibold">
                  2016-2018
                </h4>
              </div>
              <div className="pl-8 ml-4 pt-8 pb-12 border-l-2 border-white">
                <h3 className="text-2xl font-semibold">HSC</h3>
                <h4 className="mb-4 primary-color font-semibold">
                  Kajem Ali College
                </h4>
                <p className="text-justify lg:text-left">
                  Pursued higher secondary education with a concentration in
                  science. Gained deeper insights into advanced mathematics,
                  chemistry, and computer programming. </p>
              </div>
            </div>
            <div className="">
              <div className="flex bg-gradient-to-r from-[#3b3b3b] rounded-l-full justify-center items-center">
                <h3 className="rounded-full primary-bg-color font-semibold text-center w-10 h-10 p-2">
                  3
                </h3>
                <h4 className="py-1 pl-3 w-full text-white font-semibold">
                  2020-2025
                </h4>
              </div>
              <div className="pl-8 ml-4 pt-8 pb-12 border-l-2 border-white">
                <h3 className="text-2xl font-semibold">B.Sc in CSE</h3>
                <h4 className="mb-4 primary-color font-semibold">
                  International Islamic University Chittagong
                </h4>
                <p className="text-justify lg:text-left">
                  Currently pursuing a Bachelor’s degree in Computer Science &
                  Engineering. Specializing in software development and database management. Working on various
                  academic projects, research, and internships to enhance
                  practical knowledge.
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default MyEducation;
