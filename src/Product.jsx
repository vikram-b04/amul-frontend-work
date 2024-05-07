import React from 'react'
import './Product.css'
import Productdetails from './Productdetails'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Product = ({cart,setCart,setOpencart}) => {

  const addingarray = ((dd)=>{
    setCart([...cart,dd])
  })
  return (
    <div>
      <Navbar cart={cart}></Navbar>

      <div className='product-text text-center bg-product pt-5 pb-5 mt-3'>
          <h4 className='fw-semibold'>PRODUCT</h4>
      </div>

      <div className='container'>
      <div className='row ps-5'>
        {
          Productdetails.map((ss,index)=>
          <div key={index} className='col-lg-4 ps-3'>
            <div class="card w-75 mt-5">
             <img src={ss.image} class="card-img-top" alt="..." className='icecream-images img-fluid pt-4'/>
             <div class="card-body">
              <h5 class="card-title text-center fw-semibold">{ss.productname}</h5>
              <h5 class="card-text text-center">Rs.{ss.price}</h5>
              <div className='text-center pb-4 pt-3'>
              <button class="buy ps-4 pe-4 pt-2 pb-2 fw-semibold rounded-1" onClick={()=>addingarray(ss)}>Add to Cart</button>
              </div>
             </div>
            </div>
          </div>
          )
        }
      </div>
      </div>

{/* FOOTER */}

<Footer></Footer>
    </div>
  )
}
