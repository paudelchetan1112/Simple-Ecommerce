import React from 'react'

const ProductCard = ({image, title,theme}) => {
  return (
    <div>
      <div className={`productcard sm:w-48 w-60 transition-all duration-900 min-h-96 rounded-xl border-2 p-4  m-4  overflow-hidden ${theme==="Dark"?"border-gray-950":"border-white bg-gray-700"}`}>
       <div className="h-1/2">
        <img src={image} alt={title} className="rounded max-h-60 m-auto"/>
        </div>
        <div className="h-1/2 flex items-center justify-center text-center">
            <h1>{title}</h1>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard
