import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'

const Contacto = ({cart, eliminarProducto}) => {
  return (
    <>
    <Header carritoItems={cart} eliminarProducto={eliminarProducto} />
   
    <Formulario />
    <Footer />
      
    </>
  )
}

export default Contacto
