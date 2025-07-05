import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { GiPadlock } from "react-icons/gi";
import { HiHome } from "react-icons/hi2";
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'
import './stylesLogin.css'
import { Helmet } from 'react-helmet-async'


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
    <>
      <Helmet>
        <title>Goodstone Watch Store - Iniciar sesión</title>
        <meta name="description" content="Accedé al panel de administración de Goodstone ingresando tu usuario y contraseña." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className='login-container'>
        <form onSubmit={handleSubmit} className="form">
          <GiPadlock size={50} color="#fff" />
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
          <input className="submit" type="submit" aria-label='Iniciar sesion' value="LOG IN" />
        </form>
      </div>
      <div className="backToHome">
        <NavLink to='/' className='link' aria-label='Ir al inicio'><HiHome size={50} color="#fff" aria-hidden='true' /><p className="home-text">Inicio</p></NavLink>
      </div>
    </>

  )
}

export default Login
