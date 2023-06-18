import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const AboutMe = () => {
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        }
    ];

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    return (
        <div className='text-white' id='about-me'>
            <h1 className='text-center pt-20 text-4xl font-semibold text-[#159e53]'>About Me</h1>
            <p className='w-1/2 mx-auto pt-4 pb-8 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium iste est libero tenetur consequuntur aperiam, quae dignissimos sit amet nemo ipsam quisquam deserunt ut? Perspiciatis nobis ipsam placeat beatae assumenda maxime consequuntur consequatur eveniet ab! Sed voluptates laudantium voluptatem.</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#8884d8' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AboutMe;