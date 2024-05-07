import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Aboutus = ({cart}) => {
  return (
    <div>
      <Navbar cart={cart}></Navbar>

      <div className='product-text text-center bg-product pt-5 pb-5 mt-3'>
          <h4 className='fw-semibold'>ABOUT US</h4>
      </div>

        {/* ABOUT US */}

        <div className='container mt-5'>

        <div className='row pt-lg-0 pt-4'> 
        <div className='col-lg-6'>
        <div className='aboutusimage'>
          <img src={require('./images/about us image.png')} alt="" className='img-fluid' />
        </div>
        </div>
        
        <div className='col-lg-6 d-flex align-items-lg-center text-center text-lg-start'>
        <div className='aboutus-content'>
          <p className=' pt-5 fs-5'>Amul is the largest food brand in India and world’s largest pouched milk brand . When other ice cream brands opened parlours exclusively in the city, Amul decided to take to suburban and even rural areas, leading the ice cream into the hearts of millions. Amul caters to different people with different tastes with a whole range of ice cream bars exclusively for kids and novel ice cream flavours like indian sweets. The brand also consistently introduces new flavours every season, just to make sure customers have something fresh to look forward to every time they walk in to an Amul Icecreams parlour.</p>
        </div>
        </div>
        </div>
      </div>

      {/* Franchise Business */}

      <div className='container mt-5'>

        <div className='row pt-lg-0 pt-4'> 
        <div className='col-lg-6 d-flex align-items-lg-center text-center text-lg-start order-2 order-lg-1'>
        <div className='aboutus-content'>
          <p className=' pt-5 fs-5'>Amul Parlours are exclusive Amul outlets which stores and sells entire range of Amul products. The outlets are spread over 100 to 300 Sq Ft in markets, premier educational institutes, hospitals, railway stations, bus stations, municipal corporation gardens etc. where there are high footfalls. <br />Amul Parlours are exclusive Amul outlets which stores and sells entire range of Amul products. The outlets are spread over 100 to 300 Sq Ft in markets, premier educational institutes, hospitals, railway stations, bus stations, municipal corporation gardens etc. where there are high footfalls.</p>
        </div>
        </div>

        <div className='col-lg-6 order-1 order-lg-2'>
        <div className='aboutusimage'>
          <img src={require('./images/Franchise Business image.png')} alt="" className='img-fluid' />
        </div>
        </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer></Footer>
    </div>
  )
}
