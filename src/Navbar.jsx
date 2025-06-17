import React from 'react'
import SideNav from './SideNav';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';


const Navbar = ({theme,handleTheme,handleSideNav, handleKeyDown, cartItems, cartCount}) => {
console.log(cartItems)
console.log(cartItems.length)
  return (
    <div className='relative z-10'>

      <nav className={`w-full flex  justify-between items-center transition-all duration-900 p-5 ${theme==="Dark"?"":"bg-gray-20 text-white"}`}>
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
            <li className="hover:underline hover:cursor-pointer"><Link to="/">Home</Link></li>
             <li className="hover:underline hover:cursor-pointer"><Link to="/about">About</Link></li>
              <li className="hover:underline hover:cursor-pointer"><Link to="/product">Our Product</Link></li>
               <li className="hover:underline hover:cursor-pointer"><Link to="/contact">Contact</Link></li>
                
        </ul>
       
        <div className="search md:w-40 w-40 flex items-center justify-center">
            <input onKeyDown={(e)=>handleKeyDown(e)}  className={`md:w-40 w-30  rounded-lg border transition-all duration-900 ${theme==="Dark"?"border-gray-800 text-black":"border-white text-white"}`} placeholder='Search..'  type="search" name="search" id="search" />
           
        </div>
        <div className={`cart w-20 flex relative items-center justify-center ${theme==="Dark"?"text-gray-950":"text-gray-50"}`}>

  <div className={`cart w-10 relative ${theme==="Dark"?"text-gray-950":"text-gray-50"}`}>
     <Link to="/cart">
    <FaShoppingCart className="w-6 h-6  cursor-pointer" />
    {
      cartItems.length > 0 && (
        <span className={`absolute -top-2 -right-2  text-xs font-bold px-1.5 rounded-full bg-red-600 ${theme==="Dark"?"bg-gray-400 text-black":"bg-gray-700 text-white"}`}>
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )
    }
    </Link>
  </div>
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
