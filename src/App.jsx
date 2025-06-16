import React from 'react'
import Product from './Product'
import Navbar from './Navbar'
import { useState } from 'react'
import Footer from './Footer'
import SideNav from './SideNav'

const App = () => {
  const[theme, setTheme]=useState("Dark")
  const[search, setSearch]=useState("");
   const handleSearch=(input)=>{
setSearch(input.target.value);

   }
   const handleKeyDown=(input)=>{
    console.log(input)
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
  return (
    <div className={` transition-all duration-900 ${theme==="Dark"?"":"bg-gray-900"}`}>
        <Navbar theme={theme} handleSideNav={handleSideNav} handleKeyDown={handleKeyDown} handleTheme={handleTheme} />
      <Product theme={theme} sidenav={sidenav} search={search}/>
    <Footer theme={theme}/>
   
    </div>
  )
}

export default App
