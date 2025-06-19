import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'

const ProductDetail = ({ theme,handleCart,handleAddToCart}) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  console.log("Received state:", product);

  if (!product) {
    return <div className="text-red-500 text-center p-10">Product Not Found</div>;
  }

  return (
    <div className={`p-4 ${theme === "Dark" ? "text-black" : "text-white"}`}>
      <div className="text-sm mb-4 cursor-pointer text-blue-500" onClick={() => navigate("/product")}>
        ← Back to Products
      </div>
    <div className=' flex flex-col items-center justify-center m-auto'>
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
    
      
      <img src={product.image} alt={product.title} className=" mb-4" />
      <p className="text-lg mt-2 text-justify p-3 sm:w-4xl">{product.description}</p>
      <p className="text-green-400 font-semibold text-lg mt-2">${product.price}</p>
   
        <button onClick={()=>(handleAddToCart(product))} className='sm:w-lg rounded-xl p-3 border-2  text-xl hover:bg-gray-600 '>Add To Cart</button>
  
    </div>
    </div>
  );
};

export default ProductDetail;
