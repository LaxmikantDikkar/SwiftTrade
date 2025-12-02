import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landingPage/home/HomePage'
import Products from './landingPage/products/Products'
// import About from '.landingPage/about/About'
import Pricing from './landingPage/pricing/Pricing'
import Support from './landingPage/support/Support'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Signup from "./landingPage/signup/Signup";
import Login from './landingPage/signup/Login'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" element={<Products/>}></Route> 
       {/* <Routes path="/about" element={<About/>}></Routes> */}
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/support" element={<Support/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
    
    
  
)
