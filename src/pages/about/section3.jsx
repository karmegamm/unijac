import React from 'react'
import {section3} from '../../routes'
function Section3() {
  return <div className='w-full h-auto'>
  <div className='w-full h-auto relative  flex-col justify-around'>
      {section3.map(({src,h1,p,icon})=>{
        return  <div className='flex flex-col items-center md:justify-evenly my-10 md:flex-row w-full '>
                    <div className='main relative w-72  h-72  rounded-full transition duration-700  hover:bg-red-800 overflow-hidden'>
                        <div className='rectangle absolute top-28 z-10 animate-spin w-80 bg-red-700 h-14'></div>
                        {/* <div className='inner absolute bg-green-900 custom-w left-3 top-1.5 z-20  overflow-hidden  rounded-full '> */}
                            <img src={src} className='z-20 relative left-4 top-4 w-64 h-64 rounded-full  '/>
                        {/* </div> */}
                    </div>
                    <div className='relative w-full  h-auto md:w-[50%] mt-10 bg-gray-100 rounded-3xl text-center md:mt-10 '>
                        <div className='flex justify-center'>
                        <h1 className='p-1 text-2xl md:text-4xl text-gray-900 font-normal font-serif first-letter:text-red-600'>{h1}</h1>
                        <img src={icon} className='mt-1.5 h-6 w-6 md:w-9 md:h-9'/>
                        </div>
                        <p className='p-5  font-thin'>{p}</p>
                    </div>  
                </div>
        })}
  </div>
   <h1 className='text-center text-4xl font-bold font-serif first-letter:text-red-800 mb-9 ' >We're Locate @ </h1>
   <iframe className="border w-3/4 h-64 md:h-96 mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.42163678065!2d77.74882254936762!3d9.472005593181043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf85d5a9c21d%3A0xa3062c58f8f3bdb!2sAyya%20Nadar%20Janaki%20Ammal%20College!5e0!3m2!1sen!2sin!4v1675434316441!5m2!1sen!2sin" width="1300" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>

}

export default Section3;