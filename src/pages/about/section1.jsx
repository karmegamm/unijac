import React from 'react'
import img from '../../assets/about.jpeg'
function Section1() {
  return <div className='w-full md:mb-10 mt-5'>
    <div className='flex flex-col items-center md:flex-row '>
        <img src={img} className='p-6 rounded-2xl h-80 w-[90%] md:w-[28%]  md:h-80 md:p-0 md:m-14'/>
        <div className='p-4 w-[90%] md:w-[60%] md:p-10 mt-14'>
            <h1 className='text-5xl text-red-700 font-serif font-extrabold text-center'>About Us</h1>
            <p className='text-xl text-center text-gray-500 font-sans mt-7 md:mt-11'>Collective young brains started thinking about new innovation to deliver ideas in a smart way. A company started with small spark with commited quality delivery. Our highly creative teams always excels in creating unique products, that generate visiblity, lead and opportunities.</p>
        </div>
    </div>
  </div>
}

export default Section1;
