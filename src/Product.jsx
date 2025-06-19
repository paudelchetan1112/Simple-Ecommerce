import React, {useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import Skeleton from './Skeleton'

import ProductDetail from './ProductDetail'
import { BrowserRouter } from 'react-router-dom'

const Product = ({theme,sidenav,search,handleAddToCart,handleCart,category}) => {
const[product,setProduct]=useState([])
const[loading, setLoading]=useState(true)
const[selectedProductId, setSelectedProductId]=useState(null);
console.log(category)
const Api=async() => {
    try{
    let response=await fetch('https://fakestoreapi.com/products');
    let data=await response.json();
    console.log(data);
    setProduct(data)
    setLoading(false)
    }
    catch(err){
        console.log(err.message);
        setLoading(false)
    }
}

useEffect(()=>{
Api();
},[])

const filteredProducts = product.filter(item => {
  // search छ भने, search नै priority
  if (search.trim() !== "") {
    return item.title?.toLowerCase().includes(search.toLowerCase());
  }

  // category छ भने
  if (category && category.trim() !== "") {
    return item.category?.toLowerCase() === category.toLowerCase();
  }

  // नत्र सबै product देखाउ (whole product)
  return true;
});



  return (
    <div>
 
      {selectedProductId && (
  <ProductDetail  product={product.find(p => p.id === selectedProductId)} handleCart={handleCart} handleAddToCart={handleAddToCart} />
)}
      <div className={`min-h-96 container  w-full gap-3 items-center justify-center h-fit transition-all duration-900 flex flex-wrap m-auto p-4 ${theme==="Dark"?"bg-transparent ":"text-white bg-gray-800"}`}>
       <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
       
        {
  loading ? (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  ) : (
    filteredProducts.length > 0 ? (
      filteredProducts.map((dataItem) => (
        <ProductCard
          key={dataItem.id}
          handleAddToCart={handleAddToCart}
          image={dataItem.image}
          id={dataItem.id}
          title={dataItem.title}
          theme={theme}
          product={dataItem}
        />
      ))
    ) : (
      <p>Product Not Found</p>
    )
  )
}


      </div>
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
        
    </div>
  )
}

export default Product


