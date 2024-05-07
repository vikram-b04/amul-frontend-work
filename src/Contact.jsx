import React from 'react'
import { Navbar } from './Navbar'
import './Contact.css'
import { Footer } from './Footer'

export const Contact = ({cart}) => {
  return (
    <div>
      <Navbar cart={cart}></Navbar>

      <div className='product-text text-center bg-product pt-5 pb-5 mt-3'>
          <h4 className='fw-semibold'>ABOUT US</h4>
      </div>

      {/* CONTACT FORM */}

      <div className='container-fluid pt-5'>

          <div className='row pt-5'>
            <div className='col-lg-6 d-flex align-items-lg-center'>
            <div className='contact-content ps-4'>
            <h2 className='fw-bold pt-5'>Surprise Me</h2>
            <h5 className='fw-semibold pt-4'>Make every event a celebration with Amul ice creams</h5>
            <p className='fw-light pt-4 col-lg-9'>Weddings, birthdays, anniversaries, or any get-together; memorable occasions deserve mouth-watering flavours. So, place a Party Order, and we’ll bring to the bowl a variety of ice cream flavours that compliments every event. Amul adds MORE scoops of sweetness to all your celebrations.</p>
            <p className='fw-light pt-3'>Make your party memorable with Amul ice creams</p>
            <p className='fw-light pt-3 col-lg-9'>Weddings, birthdays, anniversaries, or any get-together; memorable occasions deserve mouth-watering flavours.</p>
          </div>
            </div>

            <div className='col-lg-6'>
            <div className='contactform'>
            <div className='contact-content pt-4 ps-4'>
            <h5 className='fw-semibold'>Let’s connect<br /> Drop your queries below</h5>
            </div>

            <div className='d-flex form'>
            <div className='Cform'>
              <div className='name pt-3 ps-4'>
              <input type="text" class="form-control " placeholder="Name" className='ps-2 pe-5 pt-1 pb-1' />
              </div>
              <div className='email pt-3 ps-4'>
              <input type="email" class="form-control" placeholder="Email" className='ps-2 pe-5 pt-1 pb-1'/>
              </div>
             <div className='service pt-3 ps-4'>
              <input type="text" class="form-control" placeholder="What service Needed" className='ps-2 pe-5 pt-1 pb-1'/>
             </div>
             <div className='state pt-3 ps-4'>
              <input type="text" class="form-control" placeholder="State" className='ps-2 pe-5 pt-1 pb-1'/>
             </div>
             <div className='city pt-3 ps-4'>
              <input type="text" class="form-control" placeholder="City" className='ps-2 pe-5 pt-1 pb-1'/>
             </div>
             <div className='guest pt-3 ps-4'>
              <input type="text" class="form-control" placeholder="Expected Number of Guest" className='ps-2 pe-5 pt-1 pb-1'/>
             </div>
             <div className='date pt-3 ps-4'>
              <input type="date" class="form-control"/>
             </div>
             <div className=' pt-3 ps-4 pb-4'>
               <button className='learnmorebtn ps-4 pe-4 pt-1 pb-1 fw-semibold rounded-1'>SEND</button>
             </div>
            </div>

            <div className='contactimage d-flex justify-content-end  col-lg'>
             <img src={require('./images/contact image.png')} alt="" /> 
            </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}

        <div  className='container-fluid'>
        <div className='contact text-center mt-5'>
          <h4 className='fw-semibold'>CONTACT US</h4>
        </div>

        <div className='row ps-5 pt-5'>
          <div className='col-lg-4'>
            <div className='details-1'>
              <p>AMUL ICE CREAM PRODUCT LTD <br />Plot No. 14, <br />Tamil Nadu Housing Board "A" Road,<br />Sholinganallur, Chennai - 600 119, India.</p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='details-2'>
              <p>To learn more about our services and offerings, <br />Telephone Number: 044-24501622. <br />Fax Number: 044-24501422. <br />Mail ID: info.amulicecream.in</p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='details-3'>
              <p>For Feedback / Complaints / Contact <br />E - mail: customerservice@amulicecream.in <br />Call Toll Free: 1800-120-3355</p>
            </div>
          </div>
        </div>
        </div>

        {/* FOOTER */}
        <Footer></Footer>
    </div>
  )
}
