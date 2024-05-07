import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ({cart}) => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="headerlogo navbar-brand ms-lg-4" href="#"><img src={require('./images/Amul.png')} alt="" className='w-75' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto fw-medium fs-5 pt-2">
              <li class="nav-item">
                <a class="nav-link pe-5"><Link to="/home" className='text-decoration-none header'>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-5"><Link to="/aboutus" className='text-decoration-none header'>About Us</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-5"><Link to="/product" className='text-decoration-none header'>Product</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-5"><Link to="/contact" className='text-decoration-none header'>Contact</Link></a>
              </li>
            </ul>
            <div className=' heart pt-2'>
             <img src={require('./images/Heart.png')} alt=""   />
              </div>
              <div className='ps-lg-5 pt-1 pe-5 cartimg'>
              <Link to="/cart"><img src={require('./images/Shopping-cart.png')} alt=""  /></Link>({cart.length})
              </div>
          </div>
          
        </div>
      </nav>

           
            
            <Outlet></Outlet>
    </div>
  )
}

