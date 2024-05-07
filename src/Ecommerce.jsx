import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Aboutus } from './Aboutus'
import { Product } from './Product'
import { Contact } from './Contact'
import { Cart } from './Cart'
import { Signupfile } from './loginsignupfile/Signupfile'
import { Loginfile } from './loginsignupfile/Loginfile'
import { Sucess } from './Sucess'
import { Cancel } from './Cancel'

export const Ecommerce = () => {

  const [cart,setCart] = useState([])

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Signupfile></Signupfile>}></Route>
          <Route path='login' element={<Loginfile></Loginfile>}></Route>
          
          <Route path='home' element={<Home cart={cart}></Home>}></Route>
            <Route path='aboutus' element={<Aboutus cart={cart}></Aboutus>}></Route>
            <Route path='product' element={<Product cart={cart} setCart={setCart}></Product>}></Route>
            <Route path='contact' element={<Contact cart={cart}></Contact>}></Route>
            <Route path='success' element={<Sucess></Sucess>}></Route>
            <Route path='cancel' element={<Cancel></Cancel>}></Route>
            <Route path='cart' element={<Cart cart={cart} setCart={setCart}></Cart>}></Route>
        </Routes>
        </BrowserRouter>     

    </div>
  )
}
