import React from 'react'
import Product from './Product'
import Navbar from './Navbar'
import { useState } from 'react'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import SideNav from './SideNav'
import HomePage from './HomePage'
import ProductDetail from './ProductDetail'
import Cart from './Cart'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const[cartCount, setCartCount]=useState(0);
  const[theme, setTheme]=useState("Dark")
  const[search, setSearch]=useState("");
  const [cartItems, setCartItems]=useState([])
const handleAddToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(item => item.id === product.id);
    if (existingItem) {
    // Quantity बढाउने, पहिले quantity छैन भने default 1 राखेर बढाउने
    setCartItems(cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    ));
  } else {
    // नयाँ item add गर्दा quantity: 1 राख्ने
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };
   setCartCount(prev => prev + 1);
})
};


  const handleCart=()=>{
setCartCount(cartCount+1)

  }
   const handleSearch=(input)=>{
setSearch(input.target.value);

   }
   const handleKeyDown=(input)=>{
    if(input.key==='Enter'){
handleSearch(input);
    }
   }
  const handleTheme=()=>{
    setTheme(theme==="Dark"?"Light":"Dark")

  }

   const[sidenav, setSideNav]=useState(false)
    const handleSideNav=()=>{

setSideNav(sidenav?false:true);
    }
    const handleOnClickOnSidenav=()=>{
setSideNav(false)
    }
  return (
    <BrowserRouter>
    <div className={` transition-all duration-900 ${theme==="Dark"?"":"bg-gray-900"}`}>
        <Navbar theme={theme} handleSideNav={handleSideNav} cartCount={cartCount} handleKeyDown={handleKeyDown} handleTheme={handleTheme} cartItems={cartItems} />
        <SideNav sidenav={sidenav} handleOnClickOnSidenav={handleOnClickOnSidenav}/>
      <Routes>
           <Route path="/" element={<HomePage theme={theme}/>} />
      <Route path="/product" element={<Product theme={theme} sidenav={sidenav} search={search} handleAddToCart={handleAddToCart}/>} />
       <Route path="/product/:id" element={<ProductDetail handleCart={handleCart} theme={theme} handleAddToCart={handleAddToCart} />} />
       <Route path="/cart" element={<Cart cartItems={cartItems} theme={theme} />} />

   <Route path="/about" element={<About theme={theme}/>} />
   <Route path="/contact" element={<Contact theme={theme}/>} />
   <Route path="/services" element={<Services theme={theme}/>} />

    </Routes>
    <Footer theme={theme}/>
      </div>
    </BrowserRouter>
  )
}

export default App
