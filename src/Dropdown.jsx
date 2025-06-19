import React from 'react'

const Dropdown = ({handleCategory}) => {
  return (
    <div className="z-50 absolute transition-all duration-1000 bg-gray-500 w-36 rounded-lg p-1">
      <li onClick={(e)=>handleCategory("men's clothing")} className="hover:bg-gray-600 p-1 rounded-lg">men's clothing</li>
      <li onClick={(e)=>handleCategory("jewelery")}   className="hover:bg-gray-600 p-1 rounded-lg">jewelery</li>
        <li onClick={(e)=>handleCategory("electronics")}   className="hover:bg-gray-600 p-1 rounded-lg">electronics</li>
      <li onClick={(e)=>handleCategory("women's clothing")}    className="hover:bg-gray-600 p-1 rounded-lg">women's clothing</li>
        
    </div>
  )
}

export default Dropdown
