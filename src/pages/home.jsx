import React from 'react'
import Carousel  from './carousels'
import Service from './service'
import About from './about'
function Home() {
  return <div className='h-full   w-full'>
    <Carousel/>
    <hr />
    <Service />
    <hr />
    <About />
    <hr />
  </div>
}

export default Home
