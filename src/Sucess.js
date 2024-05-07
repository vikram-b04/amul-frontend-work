import React from 'react'
import './Sucessandcancel.css'

export const Sucess = () => {
  return (
    <div>
      <div className='sucess'>
        <div className='sucesspic'>
        <img src={require('./images/success.png')} alt=""/>
        </div>
        <div>
            <h1 class="text-center pt-5 fw-semibold">PAYMENT SUCESSFUL</h1>
        </div>
      </div>
    </div>
  )
}
