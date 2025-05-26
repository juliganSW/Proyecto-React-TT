import React from 'react'
import { Link } from 'react-router-dom'
import './stylesNotFound.css'

const NotFound = () => {
  return (
    <div className='box'>
   <h1>404</h1>
   <p>Page Not Found</p>
   <button><Link to = '/'>Volver al inicio</Link></button>
   </div>
  )
}

export default NotFound
