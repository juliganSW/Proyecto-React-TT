import React from 'react'
import { Link } from 'react-router-dom'
import './stylesNotFound.css'
import notFound from '../assets/notFound.png'

const NotFound = () => {
  return (
  <div className="error_container">
  <div className='box'>
   <h1>404</h1>
   <p>Oops...page Not Found</p>
   <img src={notFound} alt='Imagen de reloj roto'/>
   <button aria-label='Volver al inicio'><Link to = '/' className='link'><p>Volver al inicio</p></Link></button>
   </div>
   </div>
  )
}

export default NotFound
