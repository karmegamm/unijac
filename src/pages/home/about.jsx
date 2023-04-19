import React from 'react'
import clg from '../../assets/clg.jpg'

function About() {
    return  <div className='mb-6 flex flex-col  mt-5 gap-4 md:gap-10  '>
                <div className='flex justify-center md:h-1 md:translate-y-24 '>
                    <h1 className='text-4xl md:text-5xl font-semibold font-serif text-red-700 first-letter:text-red-800 py-3'> About Us</h1>
                </div>
                <div className='flex flex-wrap flex-col gap-10 md:flex-row items-center justify-start md:justify-around  '>
                    <img src={clg} className='md:w-[20%] w-[65%] mx-auto rounded-2xl md:h-80 border  border-black' alt="" />
                    <div className='w-[85%] md:w-[60%] md:h-96  md:mt-5 flex justify-center md:justify-around md:items-center'>
                        <p className='text-xl w-full md:w-[78%] md:-translate-x-20 '>This Unijac technology is a platform full of students. Here,the students of Ayya Nadar Janaki Ammal College are united to work and gaining some knowledge as well as experience.</p>
                    </div>
                </div>
            </div>
}

export default About;
