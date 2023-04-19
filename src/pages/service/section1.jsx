import React from 'react'
import { service } from '../../routes';
function Section1() {
  return <div className='h-auto w-full'>
      {/* <div className='flex justify-center text-gray-800 font-bold text-4xl mt-10'>
        <h1>Services</h1>
      </div> */}
      <div className='flex flex-col gap-10 mt-10'>  
        {service.map(({img1,head1,para1,img2,head2,para2})=>{
             return <div>
                    <div className='flex justify-center items-center md:flex-row  flex-col hovdiv mb-2'>
                        <img src={img1} className='z-20 my-2 md:my-0 w-[70%] xl:w-[75%] md:w-[35%] rounded-2xl transition-transform duration-500 hovimg' />
                        <div className='w-full md:w-[30%]'>
                            <h1 className='text-4xl text-center  p-3 font-serif first-letter:text-red-500 transition-transform duration-300 heading '>{head1}</h1>
                            <p className='p-3  text-gray-600 transition-transform duration-500 goinside'>{para1}</p>
                        </div>
                    </div> 
                    <div className='flex justify-evenly items-center md:flex-row  flex-col-reverse hovdiv2'>
                        <div className='w-full md:w-[30%]  my-2 md:my-0 '>
                            <h1 className='text-4xl p-3 font-serif text-center first-letter:text-red-500 transition-transform duration-300 heading2 '>{head2}</h1>
                            <p className='p-3  text-gray-600 transition-transform duration-500 goinside2'>{para2}</p>
                        </div>
                        <img src={img2} className='z-20 w-[70%] xl:w-[75%] md:w-[30%] rounded-2xl transition-transform duration-500 hovimg2' />
                    </div></div>     
        })}
      </div>
  </div>
}

export default Section1;
