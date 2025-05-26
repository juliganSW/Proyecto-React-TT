import React from 'react'
import './stylesLogin.css'
import llave_color from '../assets/llave_color.png'


const Login = () => {
  return (
    <div className='login-container'>
      
        <form className="form">
        <img src={llave_color} alt ='imagen llave' />
        <span className="input-span">
          <label for="email" className="label">Email</label>
          <input type="email" name="email" id="email" /></span>
        <span class="input-span">
          <label for="password" className="label">Password</label>
          <input type="password" name="password" id="password" /></span>
        <input className="submit" type="submit" value="LOG IN" />
      </form>
    </div>
  )
}

export default Login
