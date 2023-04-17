import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.png'
import  routes from '../routes';
import {Link} from 'react-router-dom'

function Navbar() {
  const [isMt,setIsMt]=useState(false);
  useEffect(()=>{
    const resize=()=>{
      window.innerWidth>500&&setIsMt(false);
    }
    window.addEventListener('resize',resize)
    return ()=>{window.removeEventListener('resize',resize)}
  },[])
  const toggleNav=()=>{
    setIsMt(!isMt);
  }

  return<div className="relative flex-col">
    <div className='navbar'>
        <div className="flex-1 ml-5">
          <img src={logo} className='w-48 h-24 object-fill  rounded-full ' alt="logo" />
        </div>
        <div className="mr-10 ">
          <ul className={`hidden md:menu  md:menu-horizontal`}>
           {routes.map(({name,path,icon})=>{
            return <li  className='px-2'><Link to={path}><img src={icon} className='w-5 h-5'/>{name}</Link></li>
           })}
          </ul>
          {isMt? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleNav} className="md:hidden w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleNav} className="w-6 md:hidden h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
}
        </div>  
    </div>
  <div className={`absolute flex justify-center ${isMt?'-translate-y-0':'-translate-y-80' } w-full z-40 bg-gray-200  transition-transform duration-500 ease-in` }>
      <ul className={`menu menu-vertical ${isMt&&'' } w-40 `}>
      {routes.map(({name,path,icon})=>{
            return <li className='rounded-2xl '><Link to={path}><img src={icon} className='w-5 h-5 '/>{name}</Link></li>
           })}
      </ul>
  </div>
</div>
}

export default Navbar