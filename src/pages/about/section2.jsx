import React from 'react'
import { aboutcard } from '../../routes';

function Section1() {
  return <div className='relative  w-full flex flex-col top-14  md:top-5 justify-evenly topic mb-16 md:flex-row'>
    {aboutcard.map(({h1,p,icon})=>{
        return  <div className="mb-20 relative stack w-full md:mb-0 ">
                    <div className=" relative text-center bg-gray-500 w-3/4 card  h-52 ">
                        <h1 className="card-body mt-8 font-serif text-2xl">{h1}</h1>
                        <p className="card-body -mt-10 font-sans">{p}</p>
                        <div className='absolute w-24 h-24 rounded-full f1f3f2 left-1/3 md:ml-8 -top-14 '></div>
                        <div className='absolute kar flex justify-center items-center w-20 h-20 rounded-full  bg-gray-500 left-1/3 ml-2 md:ml-10 -top-12 '><img src={icon} className='w-12' /></div>
                    </div> 
                    <div className="relative h-20 w-2/3  md:w-80 -bottom-2 bg-gray-500 rounded-xl ">          
                    </div> 
                    <div className="relative h-2 md:w-72 w-1/3 -bottom-4 bg-gray-500 rounded-xl">       
                    </div>
                </div>
    })}
</div>
}

export default Section1;
