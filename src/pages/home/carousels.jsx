import React from 'react'
import { carousels } from '../../routes';
function Carousel() {
  return <div className='flex mx-auto h-52 xl:h-96 w-[75%] md:w-[68%] md:h-96 md:mt-10 md:mb-10'>
    <a href="#slide1" className="btn btn-circle md:mt-44 hidden md:flex md:justify-center md:items-center">❮</a> 
    <div className="w-full carousel rounded-box h-full md:mr-5  md:ml-5 ">
    {
        carousels.map(({src,id})=>{
            return  <div id={id} className="carousel-item w-full xl:h-96">
                        <img src={src} className="w-full " alt="img" />
                    </div> 
        })
    }
    </div>
    <a href="#slide2" className="btn btn-circle md:mt-44 hidden md:flex md:justify-center md:items-center ">❯</a>
  </div>
}
export default Carousel;