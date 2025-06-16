import React, {useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import Skeleton from './Skeleton'
import SideNav from './SideNav'

const Product = ({theme,sidenav,search}) => {
const[display,setDisplay]=useState([])
const[loading, setLoading]=useState(true)
console.log(search)

const Api=async() => {
    try{
    let response=await fetch('https://fakestoreapi.com/products');
    let data=await response.json();
    console.log(data);
    setDisplay(data)
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

const filteredProducts = display.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className={`min-h-96 container w-full gap-3 items-center justify-center h-fit transition-all duration-900 flex flex-wrap m-auto p-4 ${theme==="Dark"?"bg-gray-100":"text-white bg-gray-900"}`}>
         <div>
            {
                sidenav&&<SideNav theme={theme}/>
            }
        </div>
       
        {loading?<><Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          </>:
          filteredProducts.length>0?
        
          filteredProducts.map((dataItem)=>{
            return (
              <ProductCard key={dataItem.id} image={dataItem.image} title={dataItem.title} theme={theme}/>
            )
          }):<p>Product Not Found</p>
          }
      </div>
    </div>
  )
}

export default Product
