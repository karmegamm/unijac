import React from 'react'
import {card} from '../../routes' 
import { Link } from 'react-router-dom';
function Service() {
  return<div className='w-full flex xl:gap-y-16 gap-y-9 flex-wrap justify-evenly mt-7  mb-10 p-4 '>
        {card.map(({title,src,description,btn_type})=>{
            return <div className="card  shadow-2xl pt-6 hover:bg-gray-500 hover:text-white hover:opacity-100  md:w-80">
                <figure><img src={src} alt="Shoes" className='w-40  md:h-36 md:mt-5 '/></figure>
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-serif font-bold">{title}</h2>
                    <p className='text-center font-thin '>{description}</p>    
                    <div className="card-actions justify-center">
                        <Link to={'/services'}><button className={`btn ${btn_type} md:w-32 `}>Read more</button></Link>
                    </div>
                </div>
            </div>
        })}
</div> 
}
export default Service;