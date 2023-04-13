import React from 'react'
import {card} from '../routes' 
function Service() {
  return<div className='w-full flex gap-y-9 justify-evenly mt-7 flex-wrap mb-10 '>
        {card.map(({title,src,description,btn_type})=>{
            return <div className="card  shadow-2xl  hover:bg-gray-500 hover:text-white hover:opacity-100 w-56 md:w-80">
                <figure><img src={src} alt="Shoes" className='w-44 h-36 md:mt-5 '/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>    
                    <div className="card-actions justify-center">
                        <button className={`btn ${btn_type} md:w-32 `}>Read more</button>
                    </div>
                </div>
            </div>
        })}
</div> 
}
export default Service;