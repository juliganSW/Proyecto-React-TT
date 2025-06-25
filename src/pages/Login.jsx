import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import llave_color from '../assets/llave_color.png'
import { useAuth } from '../context/AuthContext'
import './stylesLogin.css'


const Login = () => {
  const { setIsAuth } = useContext(CartContext);
  const {
    email, setEmail,
    password, setPassword,
    handleSubmit,
    error
  } = useAuth();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [setEmail, setPassword]);

  //{errors.email && <p className="error">{errors.email}</p>}

  const navigate = useNavigate();

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className="form">
        <img src={llave_color} alt='imagen llave' />
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {error.email && <p className="error-message">{error.email}</p>}
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          {error.password && <p className="error-message">{error.password}</p>}
        </span>
        <input className="submit" type="submit" value="LOG IN" />
      </form>
    </div>
  )
}

export default Login
