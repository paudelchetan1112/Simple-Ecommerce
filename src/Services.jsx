import React from 'react'

const Services = ({theme}) => {
  return (
  <div className={`min-h-96 transition-all duration-900  flex items-center justify-center ${theme==="Dark"?"":"text-white bg-gray-800"}`}>
     <h1 className='text-4xl'>This is Services Pages</h1>
    </div>
  )
}

export default Services
