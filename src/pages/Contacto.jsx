import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'
import { Helmet } from 'react-helmet-async'

const Contacto = ({ cart, eliminarProducto }) => {
  return (
    <>
      <Helmet>
        <title>Goodstone Watch Store - Contacto</title>
        <meta name="description" content="Contactá con Goodstone para recibir asesoramiento, realizar consultas o solicitar soporte técnico." />
        <meta name="keywords" content="contacto, atención al cliente, soporte, consultas, Goodstone" />
        <meta name="author" content="Goodstone Watches, Inc." />
        <meta property="og:url" content="https://goodstone.vercel.app/contacto" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header carritoItems={cart} eliminarProducto={eliminarProducto} />

      <Formulario />
      <Footer />

    </>
  )
}

export default Contacto
