import React , {useState}from 'react'
import './stylesProductos.css'

const Destacados = ({ destacado }) => {
  

  return (
     
            
    <div className="all-products">
      <div className="product">
      
        <img src={destacado.imagen} alt="imagen reloj" />
        <div className="product-info">
          <h2 className="product-title">{destacado.modelo}</h2>
          <p className="product-off">15%OFF</p>
          <p className="product-shipping">Envío Gratis</p>
          <p>${destacado.precio}</p>
         <button className="product-btn agregar-btn">Ver Detalle</button>
        </div>
      </div>
    </div>
    
  )
}

export default Destacados
