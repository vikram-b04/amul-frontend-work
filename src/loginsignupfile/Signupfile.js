import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './Signupfile.css'

export const Signupfile = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigate()

  const signupfunction = async(e) =>{
    e.preventDefault();
    try {
      const userCredentail = await createUserWithEmailAndPassword(auth,email,password);
      const user = userCredentail.user;
      localStorage.setItem("token",user.accessToken);
      localStorage.setItem('user',JSON.stringify(user))
      navigation('/login')
      
    } catch (error) {
      console.log(error);
    }

  }
return (
    <div>
      <form method='post'>
        <div className='signupform'>
          <div className='aa p-5'>
          <div class="signup text text-center pt-3">
          <h3 class="fw-bold">Signup</h3>
        </div>
        <div className='emails text-center pt-3'>
         <input type='email' placeholder='Enter your email' className='ps-3 pt-2 pb-2 pe-3' onChange={(event)=>setEmail(event.target.value)}></input>
        </div>
        
        <div className='password text-center pt-3'>
        <input type='password' placeholder='Enter your password' className='ps-3 pt-2 pb-2 pe-3' onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
        
        <div className='submit text-center pt-3'>
        <input type='submit' value='Signup' className='btn btn-success ps-4 pe-4 pt-2 pb-2 fw-semibold rounded-1'  onClick={signupfunction}></input>
        </div>

        <div className='text-center pt-3 pb-3'>
         <p>Already have an account?<Link to='/login' className='text-decoration-none'>Login</Link></p>
        </div>
          </div>
        

        </div>
        
      </form>

      
      
    </div>
  )
}
