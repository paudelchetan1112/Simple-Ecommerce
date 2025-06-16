import React from 'react'
import SideNav from './SideNav';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({theme,handleTheme,handleSideNav, handleKeyDown}) => {
   
  return (
    <div>
      <nav className={`w-full flex justify-between items-center transition-all duration-900 p-5 ${theme==="Dark"?"":"bg-gray-20 text-white"}`}>
       {/* Burger */}
        <div className={`burger block md:hidden ${theme==="Dark"?"border-black":"border-white"}`} onClick={()=>handleSideNav()}>
            <div className={`w-6 border my-1 border-black bg-black ${theme==="Dark"?"border-black":"border-white"}`}></div>
           <div className={`w-6 border my-1 border-black bg-black ${theme==="Dark"?"border-black":"border-white"}`}></div>
           <div className={`w-6 border my-1 border-black bg-black ${theme==="Dark"?"border-black":"border-white"}`}></div>
        </div>
      
        <div className="logo flex justify-center items-center  w-50 transition-all hover:cursor-pointer duration-900 ">
            <h1 className='font-extrabold text-2xl'>CHETAN</h1>
        </div>
        <ul className='md:flex justify-between gap-10 mx-4 hidden'>
            <li className="hover:underline hover:cursor-pointer"><a href="#">Home</a></li>
             <li className="hover:underline hover:cursor-pointer"><a href="#">About</a></li>
              <li className="hover:underline hover:cursor-pointer"><a href="#">Services</a></li>
               <li className="hover:underline hover:cursor-pointer"><a href="#">Contact</a></li>
                
        </ul>
       
        <div className="search md:w-40 w-40 flex items-center justify-center">
            <input onKeyDown={(e)=>handleKeyDown(e)}  className={`md:w-40 w-30  rounded-lg border transition-all duration-900 ${theme==="Dark"?"border-gray-800 text-black":"border-white text-white"}`} placeholder='Search..'  type="search" name="search" id="search" />
           
        </div>
        <div className="theme w-20 flex justify-center items-center" onClick={()=>handleTheme()}>
            {
                theme==="Dark"? <button>
  <Moon className="w-6 h-6 text-blue-900 cursor-pointer" />
</button>:<button>
  <Sun className="w-6 h-6 text-yellow-500 cursor-pointer" />
</button>
            }
            
        </div>
      </nav>
      <hr />

    </div>
  )
}

export default Navbar
