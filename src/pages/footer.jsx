import React from 'react'
import routes,{socialIcons} from '../routes'
import {Link} from 'react-router-dom'
function Footer() {
  return <div className='h-full   w-full'>
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
            {routes.map(({path,name})=>{
                return <Link to={path}>{name}</Link>
            })} 
        </div>
        <div>
            <div className="flex gap-4">
            {socialIcons.map(({svg,link})=>{
                return <a  target='_blank'href={link}><img className='w-5 h-5' src={svg}/></a>
            })}
        </div>
    </div> 
    <div>
        <p>Copyright © 2023 - All right reserved by UnijacTechnologies</p>
    </div>
    </footer>
</div>   
}

export default Footer