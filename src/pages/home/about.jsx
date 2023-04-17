import React from 'react'
import clg from '../../assets/clg.jpg'

function About() {
    return <div className='mb-6 flex flex-col gap-32 md:mt-10 '>
        <div className='h-full flex flex-col items-start ml-16 md:items-start md:ml-20 md:-mb-32'>
            <h1 className='text-3xl md:text-5xl font-serif first-letter:text-red-600 py-3'> About Us</h1>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row items-center justify-start md:justify-around -mt-28 '>
            <div className='w-[60%] md:h-96  md:mt-5 flex justify-center md:justify-around md:items-center'>
                <p className='text-xl w-full md:w-[78%] '>This Unijac technology is a platform full of students. Here,the students of Ayya Nadar Janaki Ammal College are united to work and gaining some knowledge as well as experience.</p>
            </div>
            <img src={clg} className='md:w-[25%] mt-6 w-[65%] mx-auto rounded-2xl mr-14 h-96' alt="" />
        </div>
    </div>
}

export default About;
