import React from 'react'
import './Home.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Home = ({cart}) => {
  return (
    <div>
      {/* HEROSECTION */}
      <Navbar cart={cart}></Navbar>
      
      <div className='container'>
        <div className='row pt-4'> 
        <div className='col-lg-7 d-flex align-items-lg-center col-12 order-1 text-lg-start text-center'>
        <div className='herosec-content'>
          <h1 className='fw-bold display-2 col-lg-9'>Grab The Best Ice Cream</h1>
          <p className='fw-light pt-4 col-lg-11'>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrt.</p>
        </div>
        </div>
        
        <div className='col-lg-5 col-12 order-2 text-center pt-lg-0 pt-3'>
        <div className='herosecimage'>
          <img src={require('./images/herosection image.png')} alt="" className='img-fluid'/>
        </div>
        </div>
        </div>
      </div>

      {/* ABOUT US */}

      <div className='container'>
        <div className='aboutus text-center pt-5'>
          <h4 className='fw-semibold'>ABOUT US</h4>
        </div>

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

      {/* WHATS NEW */}

      <div className='d-flex justify-content-center pt-5 px-5'>
        <div className='d-flex'>
           <div className='whatsnew-image'>
            <img src={require('./images/whatsnew icecream image.png')} alt="" className='pt-4 px-5'/>
           </div>

           <div className='d-flex align-items-lg-center whatsnew-content'>
           <div className='text-center'>
            <h5 className='pt-5'>WHAT'S NEW</h5>
            <h4 className='pt-4 fw-bold '>More Flavors to Love</h4>
            <p className='pt-4 ps-5 pe-5 fw-light'>Experience New York Strawberry Cheesecake, Chocolate Cookie Crumble, and more.</p>
            <div className='pt-4'>
            <button className='learnmorebtn ps-4 pe-4 pt-2 pb-2 fw-semibold fs-5 rounded-1'>LEARN MORE</button>
            </div>
        </div>
           </div>
        </div> 
      </div>

      {/* PRODUCTS */}

      <div className='container-fluid mt-5'>
       <div className='product text-center pt-5'>
          <h4 className='fw-semibold'>PRODUCT</h4>
        </div>
        <div className='row d-flex justify-content-center pt-5'>
        <div className='favorite col-lg-2 d-flex align-items-lg-center'>
          <h2 className='col-lg-9 fw-bold'>Meet Your next favorite flavor</h2>
        </div>

        <div className='col-lg-3 '>
         <img src={require('./images/ice1.png')} className="card-img-top" alt="..."/>
         <div className="card-body productdetails ps-2">
          <h5 className='pt-3 text-center text-lg-start'>BAR</h5>
          <h5 className="fw-bold text-center text-lg-start">Chocolate Peanut</h5>
          <p className="card-text fw-light text-center text-lg-start">Chocolate ice cream and thick, creamy peanut butter swirls are wrapped in milk chocolate and crunchy, lightly salted pretzel pieces.</p>
          <div className='pb-3 text-center text-lg-start'>
            <button className='learnmorebtn1 ps-4 pe-4 pt-2 pb-2 fw-semibold fs-5 rounded-1'>LEARN MORE</button>
          </div>
        </div>
       </div>

       <div className='col-lg-3 ice2'>
         <img src={require('./images/ice2.png')} className="card-img-top" alt="..."/>
         <div className="card-body productdetails ps-2">
          <h5 className='pt-3 text-center text-lg-start'>BAR</h5>
          <h5 className="fw-bold text-center text-lg-start">Chocolate Peanut</h5>
          <p className="card-text fw-light text-center text-lg-start">Chocolate ice cream and thick, creamy peanut butter swirls are wrapped in milk chocolate and crunchy, lightly salted pretzel pieces.</p>
          <div className='pb-3 text-center text-lg-start'>
            <button className='learnmorebtn1 ps-4 pe-4 pt-2 pb-2 fw-semibold fs-5 rounded-1'>LEARN MORE</button>
          </div>
        </div>
       </div>

      <div className='col-lg-3 ice3'>
         <img src={require('./images/ice3.png')} className="card-img-top" alt="..."/>
         <div className="card-body productdetails ps-2">
          <h5 className='pt-3 text-center text-lg-start'>BAR</h5>
          <h5 className="fw-bold text-center text-lg-start">Chocolate Peanut</h5>
          <p className="card-text fw-light text-center text-lg-start">Chocolate ice cream and thick, creamy peanut butter swirls are wrapped in milk chocolate and crunchy, lightly salted pretzel pieces.</p>
          <div className='pb-3 text-center text-lg-start'>
            <button className='learnmorebtn1 ps-4 pe-4 pt-2 pb-2 fw-semibold fs-5 rounded-1'>LEARN MORE</button>
          </div>
        </div>
       </div>
    </div> 
      </div>

      {/* MORE WAYS TO ENJOY */}
        <div className='pt-5 moreways'>
          <div className='position-relative'>
          <img src={require('./images/more ways image.png')} alt="" className='w-100' />
            <div className='position-absolute top-50 start-0 translate-middle-y text-white ps-5'>
              <h5 className='ps-5'>AMUL SHOPS</h5>
              <h2 className='fw-semibold display-4 ps-5 col-lg-10 pt-3'>MORE WAYS TO ENJOY.</h2>
              <p className='ps-5 pt-2'>Experience your favorite flavors in Dazzlers, Sundaes, Milkshakes, and more.</p>
              <div className='ps-5 pt-3'>
               <button className='learnmorebtn ps-4 pe-4 pt-2 pb-2 fw-semibold fs-5 rounded-1'>LEARN MORE</button>
             </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className='container-fluid pt-5'>
          <div className='contact text-center'>
          <h4 className='fw-semibold'>CONTACT</h4>
          </div>

          <div className='row pt-5'>
            <div className='col-lg-6 d-flex align-items-lg-center'>
            <div className='contact-content ps-4 text-center text-lg-start'>
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

        {/* FOOTER */}
        <Footer></Footer>
    </div>
  )
}
