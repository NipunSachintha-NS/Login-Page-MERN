import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0'/>
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password'  name='email' className='form-control rounded-0'/>
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
          <p>You are agree to a our trrms and policies</p>
          <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</button>
        </form>
      </div>
    </div>
      

  )
}

export default App
