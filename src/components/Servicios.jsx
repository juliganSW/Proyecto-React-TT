import React from 'react'
import './stylesServicios.css'

const Servicios = () => {
  return (
     <section>
       <div className="servicios">
        <div className="columna-izq">
          <i className="fa-solid fa-truck-fast fa-2xl"></i>
         <p>ENVÍOS A TODO EL PAÍS</p>
         <p>Con múltiples opciones de entrega</p>
       </div>
          <div className="columna-medio">
          <i className="fa-solid fa-credit-card fa-2xl"></i>
          <p>ACEPTAMOS TARJETAS DE CRÉDITO</p>
          <p>Financiá tu compra en cuotas</p>
      </div>
        <div className="columna-der">
          <i className="fa-solid fa-lock fa-2xl"></i>
          <p>COMPRÁ CON SEGURIDAD</p>
          <p>Tus datos siempre protegidos</p>
        </div>
      </div>
    </section>
  )
}

export default Servicios
