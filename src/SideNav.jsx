import React from 'react'
import {BrowserRouter,Link } from 'react-router-dom'


const SideNav = ({theme,sidenav,handleOnClickOnSidenav}) => {

return (
    sidenav ? 
    <div>
    <div  className={`w-96 block relative ease-in-out  transition-all duration-1000 z-40 md:hidden box-border ${theme==="Dark"?"bg-gray-400 text-blue-950":"bg-gray-800 text-white"}`}>
      <ul className='flex flex-col text-lg'>
            <li onClick={handleOnClickOnSidenav} className="p-6 hover:bg-gray-700"><Link to="/">Home</Link></li>
             <li onClick={handleOnClickOnSidenav} className="p-6 hover:bg-gray-700"><Link to="/about">About</Link></li>
              <li onClick={handleOnClickOnSidenav} className="p-6 hover:bg-gray-700"><Link to="/product">Our Product</Link></li>
               <li onClick={handleOnClickOnSidenav} className="p-6 hover:bg-gray-700"><Link to="contact">Contact</Link></li>
                
        </ul>
    </div>
    </div>
  :null
)
}

export default SideNav
