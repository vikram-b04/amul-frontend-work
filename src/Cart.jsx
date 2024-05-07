import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar';
import './Cart.css'
import { loadStripe } from '@stripe/stripe-js'
import { Footer } from './Footer';

export const Cart = ({cart,setCart}) => {

  const[price,setPrice] = useState(0);
  const[DeliveryCharges,setDeliveryCharges] = useState(25);
  const[grandtotal,setGrandtotal] = useState(0);
  useEffect(()=>{
    let totalprice = 0;
    let grandtotal = 0;
    let DeliveryCharges = 25;
    cart.map((vv)=> totalprice = vv.count * vv.price + totalprice);
    grandtotal = totalprice + DeliveryCharges;
    setPrice(totalprice);
    setGrandtotal(grandtotal);
  })

  function incrementanddecrement(params,num) {
    let findposition = cart.indexOf(params);
    cart[findposition].count=cart[findposition].count +num;
    setCart([...cart]);
  }

  const removeproduct = (aa)=>{
    let removedata = cart.filter((dd)=> dd.id !== aa.id);
    setCart(removedata);
  }
  const stripepayment = async()=>{
    const stripe = await loadStripe('pk_test_51NzuH0SGp41m30vUAeryKVEm2UHkvf4RqfZkmICPi4viCWbxOp9Nfc1o3OVuf28cYIZrZKk8JwUkGFY9QXsggKl400cKIxUQZc')
    const body ={
      products:cart
    }
    const headers ={
      'Content-Type':'application/json'
    }
    const response = await fetch('https://amul-backend-work.onrender.com/create-checkout-session',{
      method:'POST',
      headers:headers,
      body:JSON.stringify(body)
    })
    const result = await response.json();
    console.log(result);
    const error = await stripe.redirectToCheckout({
      sessionId:result.id
    })
  }
  return (
    <div>
      <Navbar cart={cart}></Navbar>

      <div className='product-text text-center bg-product pt-5 pb-5 mt-3'>
          <h4 className='fw-semibold'>CART</h4>
      </div>

      {
    price ===0 ? <div className='emptycart'><h1>Your Cart is Empty</h1></div> : 

    <div className='container'>
    <div className=' row border border-5 mt-5'>

<div className='col-lg-6 border-end border-4'>
<div className='cartdetails'>
<div className='row'>
<div className='border-bottom border-3 pt-3'>
<h3> MY CART</h3>
</div>
{
cart.map((ss,index)=>
<div key={index} className='pt-5 pb-4'>
  <div className='d-flex'>

    <div className='cartimage'>
     <img src={ss.image} class="card-img-top" alt="..." className='icecream-images'/>
    </div>

    <div class="cart-body align-self-center">
    <h5 class="card-title ">{ss.productname}</h5>
    <h5 class="card-text pt-2">${ss.price}</h5>
    <p>Quantity : {ss.count}</p>
    <div className='incrementanddecrementbtn d-flex'>
      <div className='add'>
       <button className='rounded-1' onClick={()=>incrementanddecrement(ss,1)}>+</button>
      </div>
      <div className='minus ps-4'>
       <button className='rounded-1' onClick={()=>incrementanddecrement(ss,-1)}>-</button>
      </div>
    </div>
    <div className='pt-3'>
    <button className='removebtn ps-4 pe-4 pt-2 pb-2 fw-semibold rounded-1' onClick={()=> removeproduct(ss)}>Remove</button>
    </div>
   </div>
   
  </div>
</div>
)
}
</div>
</div>
</div>

<div className='col-lg-6'>
<div className='paymentdetails'>
<div className='ordersummary pt-3'>
<h3>ORDER SUMMARY</h3>
</div>

<div className='d-flex justify-content-between pt-3'>
<div className='sub-total'>
<h5>Sub-Total</h5>
</div>
<div className='sub-total-price'>
<h5>Rs {price}</h5>
</div>
</div>

<div className='DeliveryCharges d-flex justify-content-between pt-3'>
<div className='Charges'>
<h5>Delivery Charges</h5>
</div>
<div className='Delivery-Charges-price'>
<h5>Rs {DeliveryCharges}</h5>
</div>
</div>

<div className=' d-flex justify-content-between pt-3'>
<div className='GrandTotal'>
<h5 className='fw-bold'>Grand Total</h5>
</div>
<div className='Grand-Total-price'>
<h5 className='fw-bold'>Rs {grandtotal}</h5>
</div>
</div>

<div className='payment pt-3 '>
<button onClick={stripepayment} className='btn btn-success w-100 fw-semibold rounded-1 fs-4'>PROCEED</button>
</div>
</div>

<div className='WEACCEPT pt-4'>
<h4 className='fw-light'>WE ACCEPT</h4>
</div>

<div className='paymentgateway pt-3'>
<img src={require('./images/c1.png')} alt="" />

<img src={require('./images/c2.png')} alt="" className='ps-1' />

<img src={require('./images/c3.png')} alt="" className='ps-1' />

<img src={require('./images/c4.png')} alt="" className='ps-1'/>

<img src={require('./images/c5.png')} alt="" className='ps-1'/>

<img src={require('./images/c6.png')} alt="" className='ps-1'/>
</div>

<div className='promocode pt-4'>
<p className='fw-light'>Got a Promocode? Apply it in the next step.</p>
</div>
</div>
</div>

</div>
  }

  {/* FOOTER */}

  <Footer></Footer>

    </div>
  )
}
