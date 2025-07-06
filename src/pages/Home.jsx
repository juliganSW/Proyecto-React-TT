import React from 'react'
import Header from '../components/estaticos/Header'
import MainBackGr from '../components/MainBackGr'
import Footer from '../components/estaticos/Footer'
import Spinner from '../components/estaticos/Spinner'
import DestacadosList from '../components/DestacadosList'
import Marcas from '../components/Marcas'
import Servicios from '../components/Servicios'
import Categorias from '../components/Categorias'
import { Helmet } from 'react-helmet-async'

const Home = ({ cart, destacados, cargando, agregarCarrito, eliminarProducto }) => {
  
  return (
    <>
      <Helmet>
        <title>Goodstone Watch Store - Tienda online - Inicio</title>
        <meta name="description" content="Tienda online de relojes exclusivos con descuentos y envíos gratis." />
        <meta name="keywords" content="relojes, tienda online, descuentos, hombres, mujeres" />
        <meta name="author" content="Goodstone Watches, Inc." />
        <meta property="og:url" content="https://goodstone.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header agregarCarrito={agregarCarrito} eliminarProducto={eliminarProducto} carritoItems={cart} />
      <main>
         
        <MainBackGr />
        <h1 className='headline'> Modelos más populares</h1>

        {
          cargando ? <Spinner /> :
            <DestacadosList destacados={destacados} />
        }
        <h1 className="headline">Nuestras categorías</h1>
        <Categorias />
        <h1 className="headline">Tenemos las mejores marcas</h1>
        <Marcas />
        <Servicios />
         
      </main>
      <Footer />
    </>
  )
}

export default Home

