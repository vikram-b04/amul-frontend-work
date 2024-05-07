import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='container mt-5'>
          <div className="row ps-5">
          <div className="col-lg-4 col-12 col-md-4">
            <div>
             <a href="" className="text-decoration-none"><li className="list-group-item mt-4 text-white ">HOME</li></a>
             <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Deal of the week</li></a>
             <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Store</li></a>
             <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Our Club</li></a>
            </div>
          </div>
    
          <div className="col-lg-4 col-12 col-md-4">
            <div>
              <a href="" className="text-decoration-none"><li className="list-group-item mt-lg-4 mt-3 text-white">ABOUT US</li></a>
              <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Our Journey</li></a>
              <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Our Coaches</li></a>
              <a href="" className="text-decoration-none"><li className="list-group-item mt-2 text-white">Achievement</li></a>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='mt-lg-4 mt-3'>
              <h5 className='text-white'>Subscribe to news letter</h5>
            </div>
            <div className='email pt-3'>
              <input type="email" class="form-control" placeholder="Enter your Email" className='ps-2 pe-5 pt-1 pb-1'/>
            </div>
            <div className=' pt-3 pb-3'>
               <button className='submitbtn ps-4 pe-4 pt-1 pb-1 fw-semibold rounded-1'>SUBMIT</button>
             </div>
          </div>
        </div>

        <div className='row copyright ps-5 pt-4'>
          <div className='col-lg-4'>
            <p className='text-white'>Copyright | Amul Ice Icream India</p>
          </div>

          <div className='col-lg-4 global'>
          <p className='text-white'>INDIA | <i class="bi bi-globe-americas"></i> CHANGE LOCATION  </p>
          </div>
          <div className='col-lg-4'>
          <i class="bi bi-youtube text-white fs-3"></i>
          <i class="bi bi-instagram text-white fs-4 ps-3"></i>
          <i class="bi bi-twitter-x text-white fs-4 ps-3"></i>
          <i class="bi bi-facebook text-white fs-4 ps-3"></i>
          </div>
        </div>
        </div>
    </div>
  )
}
