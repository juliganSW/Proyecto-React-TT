import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'

const Contacto = ({cart, eliminarProducto}) => {
  return (
    <>
    <Header carritoItems={cart} eliminarProducto={eliminarProducto} />
    <h1>Contactate con Nosotros</h1>
    <Formulario />
    <Footer />
      
    </>
  )
}

export default Contacto
