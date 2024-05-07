import React from 'react'
import './Sucessandcancel.css'

export const Cancel = () => {
  return (
    <div>
      <div className='Cancel'>
        <div className='cancelpic'>
        <img src={require('./images/cancel.png')} alt=""/>
        </div>
        <div>
            <h1 class="text-center pt-5 fw-semibold">PAYMENT UNSUCESSFUL</h1>
        </div>
      </div>
    </div>
  )
}
