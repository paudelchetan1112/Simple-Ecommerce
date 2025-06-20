import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, id, title, theme, product,handleAddToCart}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { state: { product } }); // 👈 यो line अत्यन्त जरुरी छ
  };

  return (
    <div 
      className={`shadow-lg relative sm:w-48 w-60 transition-shadow cursor-pointer duration-900 min-h-96 rounded-xl border-2 p-4 m-4 overflow-hidden ${theme === "Dark" ? "border-gray-950" : "border-white bg-gray-700"}`}>
      <div onClick={handleClick}>
      <div className="h-1/3" >
        <img src={image} alt={title} className="rounded max-h-60 m-auto" />
      </div>
      <div className="h-1/3 flex items-center justify-center text-center over">
        <h1>{title}</h1>
      </div>
      </div>
      <div className='absolute bottom-2  flex items-center w-40 m-auto justify-center h-auto'>
      <button onClick={()=>handleAddToCart(product)} className=" p-1   m-auto bg-gray-600 cursor-pointer h-auto hover:bg-gray-700 rounded-lg text-white">
        Add To Cart
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
