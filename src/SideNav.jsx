import React from 'react'

const SideNav = ({theme}) => {
  return (
    <div>
    <div  className={`w-96 block relative ease-in-out  transition-all duration-1000 z-50 md:hidden box-border ${theme==="Dark"?"bg-gray-400 text-blue-950":"bg-gray-800 text-white"}`}>
      <ul className='flex flex-col text-lg'>
            <li className="p-6 hover:bg-gray-700"><a href="#">Home</a></li>
             <li className="p-6 hover:bg-gray-700"><a href="#">About</a></li>
              <li className="p-6 hover:bg-gray-700"><a href="#">Services</a></li>
               <li className="p-6 hover:bg-gray-700"><a href="#">Contact</a></li>
                
        </ul>
    </div>
    </div>
  )
}

export default SideNav
